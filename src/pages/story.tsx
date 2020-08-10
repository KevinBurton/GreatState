import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

import Story from "../components/Story/Story";
import Layout from "../components/layout"
import SEO from "../components/seo"

const StoryPage = () => {
	const mikeQuery = useStaticQuery(graphql`
    query {
      mike: file(relativePath: {eq: "img/mike-burton.jpg"}) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 500, height: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
	}`);
	return (
		<Layout>
			<SEO title="Home" />
			<Story mike={mikeQuery.mike.childImageSharp.fixed}/>	
		</Layout>
	);
}

export default StoryPage;