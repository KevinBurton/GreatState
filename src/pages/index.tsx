import React, { FC } from "react"

import UnderConstruction from '../components/UnderConstruction';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img, {FixedObject} from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

import CarouselBanner from '../components/Banner/CarouselBanner';
import { string } from "prop-types";

const handleUnderConstructionNotification = async (
  e: React.FormEvent<HTMLFormElement>
): Promise<void> => {
  e.preventDefault();
  console.log(e);
};

type ImageProps = {
  logo: FixedObject|FixedObject[]
}

const PureImg: FC<ImageProps> = ({logo}) => {
  return ( <Img fixed={logo} /> );
}

export interface ImageAttribute {
  Name: string;
  Image: string;
}
export interface ItemAttribute {
  Name: string;
  Caption: string;
  contentPosition: string;
  Items: ImageAttribute[];
}

type PureIndexPageProps = {
  handleUnderConstructionNotification: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>,
  logo?: FixedObject|FixedObject[],
  items?: ItemAttribute[]
}

export const PureIndexPage:FC<PureIndexPageProps> = ({handleUnderConstructionNotification,logo,items}) => {
  if (process.env.REACT_APP_CONSTRUCTION === 'true') {
    return (<UnderConstruction onSubmit={handleUnderConstructionNotification}/>);
  } else {
    return (<>
              <CarouselBanner items={items}/>
           </>);
  }
}

export const imageQuery = graphql`
  fragment imageQuery on File {
    name
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fixed(width: 250, height: 250) {
        ...GatsbyImageSharpFixed
      }
    }
}
`

export const query = graphql`
  query {
    logo: file(relativePath: {eq: "img/greatstate.png"}) {
      ...imageQuery
    }

    evolution: file(relativePath: { eq: "img/progression-lose-weight.png" }) {
      ...imageQuery
    }
    exercise: file(relativePath: { eq: "img/exercise-words.jpg" }) {
      ...imageQuery
    }

    bike: file(relativePath: { eq: "img/conditioning-bike.jpg" }) {
      ...imageQuery
    }
    sharp: file(relativePath: { eq: "img/weight-lifting-women-back.jpg" }) {
      ...imageQuery
    }

    load: file(relativePath: { eq: "img/weight-lifting-load.jpg" }) {
      ...imageQuery
    }
    start: file(relativePath: { eq: "img/weight-lifting-start.jpg" }) {
      ...imageQuery
    }
  }
`
const IndexPage = () => {
  const { logo, evolution, exercise, sharp, bike, load, start } = useStaticQuery(query);

  const items:ItemAttribute[] = [
    {
        Name: "Lose Weight",
        Caption: "Lose Weight",
        contentPosition: "left",
        Items: [
            {
                Name: "Evolution",
                Image: evolution.childImageSharp.fixed.src //Evolution
            },
            {
                Name: "Did you do it?",
                Image: exercise.childImageSharp.fixed.src//Excercise
            }
        ]
    },
    {
        Name: "Conditioning",
        Caption: "Conditioning",
        contentPosition: "middle",
        Items: [
            {
                Name: "Bike",
                Image: bike.childImageSharp.fixed.src//Bike
            },
            {
                Name: "Sharp",
                Image: sharp.childImageSharp.fixed.src//Sharp
            }
        ]
    },
    {
        Name: "Strength",
        Caption: "Lift weights",
        contentPosition: "right",
        Items: [
            {
                Name: "Ready",
                Image: load.childImageSharp.fixed.src//Load
            },
            {
                Name: "Set",
                Image: start.childImageSharp.fixed.src//Start
            }
        ]
    }
  ];

  return (
    <Layout>
      <SEO title="Home" />
      <PureIndexPage handleUnderConstructionNotification={handleUnderConstructionNotification}
                     logo={logo.childImageSharp.fixed}
                     items={items}/>
    </Layout>
  )};

export default IndexPage;
