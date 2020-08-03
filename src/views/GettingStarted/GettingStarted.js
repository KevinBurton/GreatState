import React from 'react';
import GettingStarted from 'components/GettingStarted/GettingStarted';

const GettingStartedPage = () => {
	const handleGettingStarted = (form) => {
		console.log(form);
	}
	return (
		<GettingStarted onSubmit={handleGettingStarted}/>
	);
}

export default GettingStartedPage;