import React from 'react';

import { useStaticQuery, graphql } from "gatsby";

import Facility from "../components/Facility/Facility";
import Layout from "../components/layout"
import SEO from "../components/seo"

export const imageMainQuery = graphql`
  fragment imageMainQuery on File {
    name
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fixed(width: 720, height: 720) {
        ...GatsbyImageSharpFixed
      }
    }
}`

export const imageTourQuery = graphql`
  fragment imageTourQuery on File {
    name
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fixed(width: 180, height: 180) {
        ...GatsbyImageSharpFixed
      }
    }
}`

const FacilityPage = () => {
	const facilityData = useStaticQuery(graphql`
    query {
      inside: file(relativePath: {eq: "img/inside.jpg"}) {
		  ...imageMainQuery
      }
	  inside2: file(relativePath: {eq: "img/inside2.jpg"}) {
		...imageTourQuery
	  }
	  inside3: file(relativePath: {eq: "img/inside3.jpg"}) {
		...imageTourQuery
	  }
	  window: file(relativePath: {eq: "img/window.jpg"}) {
		...imageTourQuery
	  }
	  balcony: file(relativePath: {eq: "img/balcony.jpg"}) {
		...imageTourQuery
	  }
	}`);
   	return (
  		<Layout>
    		<SEO title="Home" />
			<Facility inside={facilityData.inside.childImageSharp.fixed}
			          inside2={facilityData.inside2.childImageSharp.fixed}
			          inside3={facilityData.inside3.childImageSharp.fixed}
			          window={facilityData.window.childImageSharp.fixed}
			          balcony={facilityData.balcony.childImageSharp.fixed}
			/>
		</Layout>
	);
}

export default FacilityPage;