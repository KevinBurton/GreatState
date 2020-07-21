import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"

export const PurePricing = () => {
	return (
		<>
			<h2>Pricing</h2>
			<p>		
				READY TO JOIN GREAT STATE CROSSFIT? WE’RE EXCITED TO HAVE
				YOU AS A MEMBER. WE HAVE AN ARRAY OF MEMBERSHIP OPTIONS
				AND PLANS TO SUIT YOUR SCHEDULE.
			</p>
		</>
	);
}
const Pricing = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<PurePricing/>	
		</Layout>
	);
}

export default Pricing;