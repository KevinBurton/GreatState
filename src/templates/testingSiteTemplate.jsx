import React from 'react';
import axios from 'axios';
import SEO from '../components/seo';
import Layout from '../components/layout';
import CountyTesting from '../components/CountyTesting';


class StateTestingComponent extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data: {features: []},
      };
    }
  
    componentDidMount() { 
      axios.get('https://dhsgis.wi.gov/server/rest/services/DHS_COVID19/COVID19_Community_Testing_Sites/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&orderByFields=CMNTY_SRVD ASC&outSR=4326&f=json').then((response) => {
        this.setState({ data: response.data });
      });
  
      return this.state;
    }
  
  
    render() {
         return (
            <Layout>
			          <SEO title="Covid-19 Testing Sites" />
                <CountyTesting features={this.state.data.features}/>
            </Layout>
        );
    }
}
  
export default ({ pageContext: { query } }) => (
    <StateTestingComponent query={query} />
  )