import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"

export const PureResources = () => {
	return (
		<>
			<h2>Resources</h2>
			<ul>
				<li>FAQ</li>
				<li>Membership Policies</li>
				<li>News &amp; Updates</li>
			</ul>
		</>
	);
}

const Resources = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<PureResources/>	
		</Layout>
	);
}

export default Resources;