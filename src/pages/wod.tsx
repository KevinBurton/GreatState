import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"

export const PureWOD = () => {
	return (
		<div>WOD</div>
	);
}

const WOD = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<PureWOD/>
		</Layout>
	);
}

export default WOD;