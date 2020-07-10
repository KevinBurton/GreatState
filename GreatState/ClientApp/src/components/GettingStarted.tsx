import React from 'react';
import Start, { FormData } from './Start';

const GettingStarted = () => {

	const handleGettingStarted = (form: FormData) => {
		console.log(form);
	}
	return (
		<Start onSubmit={handleGettingStarted}/>
	);
}

export default GettingStarted;