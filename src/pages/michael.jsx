import React from 'react';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Video from "../components/Video";
  
export const PureMichael = () => {
    return (<Video/>);
}
const Michael = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<PureMichael/>	
		</Layout>
	);
}

export default Michael;