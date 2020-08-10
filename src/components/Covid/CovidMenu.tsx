import React, { useState, useEffect }  from "react";
import axios, { AxiosResponse } from "axios";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
// core components
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import CustomTabs from "../CustomTabs/CustomTabs";
import CovidStatus, { CovidStatusData } from '../../components/Covid/CovidStatus';
import CovidTesting, { CovidTestingData } from '../../components/Covid/CovidTesting';
import CovidDaneCounty from '../../components/Covid/CovidDaneCounty';


const CovidMenu = () => {
  const [ status, setStatus ] = useState<CovidStatusData | "" | any>({features: []});
  const [ testing, setTesting ] = useState<CovidTestingData | "" | any>({features: []});
  useEffect(() => {
    axios.get<CovidStatusData>('https://services1.arcgis.com/ISZ89Z51ft1G16OK/ArcGIS/rest/services/COVID19_WI/FeatureServer/1/query?where=1%3D1&outFields=*&returnGeometry=false&orderByFields=POSITIVE DESC&outSR=4326&f=json').then((response) => {
        setStatus(response.data);
    });
    axios.get<CovidTestingData>('https://dhsgis.wi.gov/server/rest/services/DHS_COVID19/COVID19_Community_Testing_Sites/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&orderByFields=CMNTY_SRVD ASC&outSR=4326&f=json').then((response) => {
        setTesting(response.data);
    });
  },[]);
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Dane County",
                tabIcon: BugReport,
                tabContent: (
                  <CovidDaneCounty status={status.features} testing={testing.features}/>
                )
              },
              {
                tabName: "Status",
                tabIcon: BugReport,
                tabContent: (
                  <CovidStatus features={status.features}/>
                )
              },
              {
                tabName: "Testing",
                tabIcon: Code,
                tabContent: (
                  <CovidTesting features={testing.features}/>
                )
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default CovidMenu;