import React from 'react';
import axios from 'axios';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '../../components/seo';
import Layout from '../../components/layout';

import CountyStatus from '../../components/CountyStatus';
import CountyTesting from '../../components/CountyTesting';

class IndexPageComponent extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        status: {features: []},
        testing: {features: []}
      };
    }
  
    componentDidMount() {
      const { query } = this.props;
      query.map(node => {
        if(node.node.context && node.node.context.query != null ) {
          let {query} = node.node.context;
          if(query === 'status') {
            axios.get('https://services1.arcgis.com/ISZ89Z51ft1G16OK/ArcGIS/rest/services/COVID19_WI/FeatureServer/1/query?where=1%3D1&outFields=*&returnGeometry=false&orderByFields=POSITIVE DESC&outSR=4326&f=json').then((response) => {
                this.setState({ status: response.data });
            });
          } else if(query === 'testing') {
            axios.get('https://dhsgis.wi.gov/server/rest/services/DHS_COVID19/COVID19_Community_Testing_Sites/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&orderByFields=CMNTY_SRVD ASC&outSR=4326&f=json').then((response) => {
              this.setState({ testing: response.data });
            });
          }
        }
        return this.state;
      });
    }
  
    render() {
      return (
        <Layout>
          {
            this.props.query.map(node => {
              if(node.node.context && node.node.context.query != null ) {
                let {query} = node.node.context;

                if(query === 'status') {
                  return (
                    <>
                      <SEO title={`Covid-19 ${query}`} />
                      <CountyStatus features={this.state.status.features}/>
                    </>);
                } else if(query === 'testing') {
                  return (
                    <>
                      <SEO title={`Covid-19 ${query}`} />
                      <CountyTesting features={this.state.testing.features}/>
                    </>);
                }
              }
              return (<></>);
            })
          }
        </Layout>
      );
    }
  }
  
  const IndexPage = () => {
    const queryContext = useStaticQuery(graphql`
    {
      allSitePage {
        edges {
          node {
            context {
               query
            }
          }
        }
      }
    }`);
    return (
      <>
        <IndexPageComponent query={queryContext.allSitePage.edges} />
      </>
    );
  };
  
  export default IndexPage