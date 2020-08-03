import React from 'react';
import Contact from 'components/Contact/Contact';

const center = {
    lat: 43.035419,
    lng: -89.380748
};

const ContactPage = () => {
    return (<Contact center={center}/>);
}

export default ContactPage;