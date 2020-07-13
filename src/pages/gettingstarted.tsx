import React from 'react';
import Start, { StartFormData } from '../components/Start';

import Layout from "../components/layout"
import SEO from "../components/seo"

const GettingStarted = () => {

	const handleGettingStarted = (form: StartFormData) => {
		console.log(form);
	}
	return (
		<Layout>
			<SEO title="Home" />
			<Start onSubmit={handleGettingStarted}/>
		</Layout>
	);
}

export default GettingStarted;