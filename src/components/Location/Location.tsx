import React, { FC, useState, useCallback } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';


const containerStyle = {
    width: '800px',
    height: '800px'
};

type LocationCenter = {
    center: {
        lat: number;
        lng: number;
    }
}

const Location: FC<LocationCenter>  = ({ center }) => {
    // const { site } = useStaticQuery(
    //   graphql`
    //     query {
    //       site {
    //         siteMetadata {
    //             googleMapsApiKey
    //         }
    //       }
    //     }
    //   `
    // )
    let googleMapsApiKey: string = process.env.GOOGLE_MAPS_API_KEY ?? '';
    const [, setMap] = useState(null);
    
    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        const points = [
            { lng: center.lng + 0.010, lat: center.lat - 0.010 },
            { lng: center.lng + 0.010, lat: center.lat + 0.010 },
            { lng: center.lng - 0.010, lat: center.lat + 0.010 },
            { lng: center.lng - 0.010, lat: center.lat - 0.010 }
        ];
        points.forEach((point) => bounds.extend(point));
        map.fitBounds(bounds);
        setMap(map);
    }, [center.lng,center.lat])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])
    return (
        <LoadScript
            googleMapsApiKey={googleMapsApiKey}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
            data-testid='map'
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
    );
};

export default Location;