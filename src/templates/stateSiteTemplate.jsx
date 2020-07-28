import React from 'react';
import axios from 'axios';
import SEO from '../components/seo';
import Layout from '../components/layout';
import CountyStatus from '../components/CountyStatus';


class StateStatusComponent extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data: [],
      };
    }
  
    componentDidMount() { 
      axios.get('https://services1.arcgis.com/ISZ89Z51ft1G16OK/ArcGIS/rest/services/COVID19_WI/FeatureServer/1/query?where=1%3D1&outFields=*&returnGeometry=false&orderByFields=POSITIVE DESC&outSR=4326&f=json').then((response) => {
        this.setState({ data: response.data });
      });
  
      return this.state;
    }
  
  
    render() {
        const { data } = this.state;
        return (
            <Layout>
			          <SEO title="Covid-19 Status" />
                <CountyStatus features={data.features}/>
            </Layout>
        );
    }
}
  
export default ({ pageContext: { query } }) => (
    <StateStatusComponent query={query} />
  )