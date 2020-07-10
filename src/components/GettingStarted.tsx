import React from 'react';
import Start, { StartFormData } from './Start';

const GettingStarted = () => {

	const handleGettingStarted = (form: StartFormData) => {
		console.log(form);
	}
	return (
		<Start onSubmit={handleGettingStarted}/>
	);
}

export default GettingStarted;