import React from 'react';

import CovidMenu from "../components/Covid/CovidMenu";
import Layout from "../components/layout"
import SEO from "../components/seo"

const CovidPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<CovidMenu/>
		</Layout>
	);
}

export default CovidPage;