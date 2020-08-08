import React, { FunctionComponent } from 'react';
import Img, {FixedObject} from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
type ImageProps = {
	mike: FixedObject;
  }

export const PureStory: FunctionComponent<ImageProps> = ({mike}) => {
	return (
		<>
			<h2>OUR STORY</h2>
			<p>		
				The idea to open Great State CrossFit began when Head Coach
				&amp; Owner, Mike Burton, was working at several other CrossFit
				gyms in Southern California. An athlete since childhood, 
				Mike sidetracked in his early twenties, and found CrossFit 
				by accident while living in San Diego. After over 5 years 
				training himself and others, he wanted to bring his experience 
				working with some of the best coaches in the nation to Madison, 
				WI. Finally, after years of planning, GSCF was born.

				Great State CrossFit’s philosophy is about more than just using
				strength and conditioning to improve your quality of life – 
				nutrition and mobility are key factors that allow the S&amp;C exercises
				to develop total wellness. We push every member to take advantage
				of our Yoga/Mobility classes as well as provide them nutritional
				guidance in order to achieve their wellness goals. For members
				who would like to take advantage of all the benefits of a high
				intensity workout without the more complex Olympic lifts, our
				one-of-a-kind Fit &amp;Flexible program provides just that, and
				supplements the regimen with Mobility and Yoga classes.

				Being the newest CrossFit gym in town also has its benefits – we
				have the newest equipment, fresh &amp; clean facilities, and a drive
				to be the best box in Dane County. We are right off the beltline
				and just down the street from the Alliant Energy Center and
				Downtown. We offer all our clients a Wodify account to ensure they
				can SEE their numbers improving. Best of all, we are a gym that 
				LISTENS to our athletes – its important to us that they are getting
				the services they want while getting the results they seek. Feedback
				is not only welcomed, but encouraged.

				We hope to see you in the gym soon.
			</p>
			<Img fixed={mike} alt="Mike"/>
			<h5>MIKE BURTON</h5>
			<h6>Head Coach and Owner</h6>
			<p>CF Level 1</p>
			<p>Dry Land Coach for MAC</p>
			<p>OPEX CCP, completing case studies</p>
			<p>Personal Trainer Certification</p>
		</>
	);
}

const Story = () => {
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
			<PureStory mike={mikeQuery.mike.childImageSharp.fixed}/>	
		</Layout>
	);
}

export default Story;