import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"

const Resources = () => {
	return (
		<Layout>
			<SEO title="Home" />	
			<h2>Resources</h2>
			<ul>
				<li>FAQ</li>
				<li>Membership Policies</li>
				<li>News & Updates</li>
			</ul>
		</Layout>
	);
}

export default Resources;