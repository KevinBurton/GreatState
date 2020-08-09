import React, { FC } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// core components
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import Table from "../Table/Table";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";

import covidStyle from "../../assets/jss/great-state/components/covidStyle";

const useStyles = makeStyles((theme: Theme) => createStyles(covidStyle));

export interface CovidTestingAttributes {
  OBJECTID: number;
  CT_ID: string;
  CMNTY_SRVD: string;
  NAME: string;
  TYPE: string;
  COUNTY: string;
  ADDRESS: string;
  CITY: string;
  STATE: string;
  ZIP: number;
  LAT: number;
  LON: number;
  STATUS: string;
  ACTIVE: string;
  LOC_DISC: string;
  DATES: string;
  HOURS: string;
  PROCESS: string;
  PHONE: string;
  PHONE2: string;
  CONTACT: string;
  CONTACT2: string;
}

export interface CovidTestingFeature {
  attributes: CovidTestingAttributes;
}
type CovidTestingProps = {
  features?: CovidTestingFeature[];
}

const CovidTesting: FC<CovidTestingProps> = ({features}) => {
    const classes = useStyles();
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
                  tableHead={[ "OBJECTID","CT_ID","CMNTY_SRVD","NAME","TYPE","COUNTY","ADDRESS","CITY",
                               "STATE","ZIP","LAT","LON","STATUS","ACTIVE","LOC_DISC","DATES","HOURS",
                               "PROCESS","PHONE","PHONE2","CONTACT","CONTACT2" ]}
                  tableData={features ? features.map(d => Object.values(d.attributes)) : []}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </>
    );
}

export default CovidTesting;