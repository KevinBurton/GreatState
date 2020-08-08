import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"

import WOD from "../components/WOD/WOD"

export const PureWODPage = () => {
	return (<WOD/>);
}

const WODPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<PureWODPage/>
		</Layout>
	);
}

export default WODPage;