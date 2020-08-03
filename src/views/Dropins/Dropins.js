import React from 'react';
import Dropins from 'components/Dropins/Dropins';

const center = {
	lat: 43.035419,
	lng: -89.380748
};

export const DropinPage = () => {
	return (<Dropins center={center}/>);
}

export default DropinPage;