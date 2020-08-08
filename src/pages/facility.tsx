import React, { FunctionComponent } from 'react';

import Img, {FixedObject} from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

type ImageProps = {
	inside: FixedObject;
	inside2: FixedObject;
	inside3: FixedObject;
	window: FixedObject;
	balcony: FixedObject;
  }

  
export const PureFacility: FunctionComponent<ImageProps> = ({inside, inside2, inside3, window, balcony}) => {
	return (
		<>
			<h2>Facility</h2>
			<p>
				We know that an athlete’s experience at the gym is more than
				just getting sweaty – the programming, community and facility
				they choose are huge factors. For many of our athletes, the
				gym is is a place they visit almost daily, so we strive to
				provide each one a complete experience.

				At Great State, we are pretty proud of our box. We are located
				in a brand-new building in the Novation Business Park in Madison,
				Wisconsin. Our suite has floor-to-ceiling, wall-to-wall windows 
				– our members benefit from the awesome natural light, (which as
				we know, can be a godsend during those winter months). We’ve invested
				in the best equipment and a fully stocked pro-shop. Great State
				is centrally located – we are just off the beltline (exit south on
				Rimrock Rd) and have plenty of private parking.  We are literally
				down the street from the Alliant Energy Center (where the 2017-2021
				CrossFit Games are held!) and another 5 minutes from Downtown &amp; the
				Capitol square.

				Check out our box below or, better yet, come visit us. We would love to meet you.
			</p>
			<Img fixed={inside} alt="Inside"/>
			<div>
				<Img fixed={inside2} alt="Inside2"/>
				<Img fixed={inside3} alt="Inside3"/>
				<Img fixed={window} alt="Window"/>
				<Img fixed={balcony} alt="Balcony"/>
			</div>
		</>
	);
}

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

const Facility = () => {
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
			<PureFacility inside={facilityData.inside.childImageSharp.fixed}
			              inside2={facilityData.inside2.childImageSharp.fixed}
			              inside3={facilityData.inside3.childImageSharp.fixed}
			              window={facilityData.window.childImageSharp.fixed}
			              balcony={facilityData.balcony.childImageSharp.fixed}
			/>
		</Layout>
	);
}

export default Facility;