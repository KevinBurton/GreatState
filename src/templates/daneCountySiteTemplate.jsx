import React from 'react';
import axios from 'axios';
import SEO from '../components/seo';
import Layout from '../components/layout';
import CovidDaneCounty from '../components/Covid/CovidDaneCounty';


class DaneCountyComponent extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        status: [],
        testing: []
      };

    }
  
    componentDidMount() { 
      axios.get('https://services1.arcgis.com/ISZ89Z51ft1G16OK/ArcGIS/rest/services/COVID19_WI/FeatureServer/1/query?where=1%3D1&outFields=*&returnGeometry=false&orderByFields=POSITIVE DESC&outSR=4326&f=json').then((response) => {
        this.setState({ status: response.data });
      });
      axios.get('https://dhsgis.wi.gov/server/rest/services/DHS_COVID19/COVID19_Community_Testing_Sites/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&orderByFields=CMNTY_SRVD ASC&outSR=4326&f=json').then((response) => {
        this.setState({ testing: response.data });
      });
      return this.state;
    }
  
  
    render() {
        const { status, testing } = this.state;
        return (
            <Layout>
			          <SEO title="Covid-19 Dane County" />
                <CovidDaneCounty status={status.features} testing={testing.features}/>
            </Layout>
        );
    }
}
  
export default ({ pageContext: { query } }) => (
    <DaneCountyComponent query={query} />
  )