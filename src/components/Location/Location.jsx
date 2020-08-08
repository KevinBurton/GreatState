import React from 'react';
import PropTypes from "prop-types";
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '800px',
    height: '800px'
};

const Location = ({ center }) => {
    const [, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        const points = [
            { lng: center.lng + 0.010, lat: center.lat - 0.010 },
            { lng: center.lng + 0.010, lat: center.lat + 0.010 },
            { lng: center.lng - 0.010, lat: center.lat + 0.010 },
            { lng: center.lng - 0.010, lat: center.lat - 0.010 }
        ];
        points.forEach((point) => bounds.extend(point));
        map.fitBounds(bounds);
        setMap(map)
    }, [center.lng,center.lat])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}
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

Location.propTypes = {
    center: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
    })
};
  
export default Location;