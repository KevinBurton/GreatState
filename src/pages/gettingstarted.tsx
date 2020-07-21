import React from 'react';
import Start, { StartFormData } from '../components/Start';

import Layout from "../components/layout"
import SEO from "../components/seo"

export const PureGettingStarted = (handleGettingStarted) => {
	return (
		<Start onSubmit={handleGettingStarted}/>
	);
}
const GettingStarted = () => {

	const handleGettingStarted = (form: StartFormData) => {
		console.log(form);
	}
	return (
		<Layout>
			<SEO title="Home" />
			<PureGettingStarted handleGettingStarted={handleGettingStarted}/>
		</Layout>
	);
}

export default GettingStarted;