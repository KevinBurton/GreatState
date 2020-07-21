import React from "react"

import UnderConstruction from '../components/UnderConstruction';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Video from "../components/Video";
import Img, {FixedObject} from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const handleUnderConstructionNotification = (event) => {
  event.preventDefault();
  console.log(event);
}

const PureImg = ({fixed}) => {
  return ( <Img fixed={fixed} /> );
}

const PureIndexPage = ({handleUnderConstructionNotification,fixed}) => {
  if (process.env.REACT_APP_CONSTRUCTION === 'true') {
    return (<UnderConstruction onSubmit={handleUnderConstructionNotification}/>);
  } else {
    return (<>
              <Video/>
              <PureImg fixed={fixed} />
           </>);
  }
}

const IndexPage = () => {
  const logoData = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "img/greatstate.png"}) {
        name
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Home" />
      <PureIndexPage handleUnderConstructionNotification={handleUnderConstructionNotification}
                     fixed={logoData.file.childImageSharp.fixed}/>
    </Layout>
  )};

export default IndexPage;
