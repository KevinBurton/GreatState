import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import Table from "../Table/Table.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";

import styles from "assets/jss/great-state/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const CovidTesting = () => {
    const [ data, setData ] = useState({features: []});
    const classes = useStyles();
    useEffect(() => {
      axios.get('https://dhsgis.wi.gov/server/rest/services/DHS_COVID19/COVID19_Community_Testing_Sites/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&orderByFields=CMNTY_SRVD ASC&outSR=4326&f=json')
           .then((response) => {
              setData(response.data);
            }
      );
    }, []);
    return (
        <>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Wisconsin Testing Centers</h4>
                <p className={classes.cardCategoryWhite}>
                  New employees on 15th September, 2016
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={[ "CT_ID","CMNTY_SRVD","NAME","TYPE","COUNTY","ADDRESS","CITY",
                               "STATE","LAT","LON","STATUS","ACTIVE","LOC_DISC","DATES","HOURS",
                               "PROCESS","PHONE","PHONE2","CONTACT","CONTACT2" ]}
                  tableData={data ? data.features.map(d => Object.values(d.attributes)): []}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </>
    );
}

export default CovidTesting;