import React, { FC }  from "react";
// react plugin for creating charts
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";;
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import Table from "../Table/Table";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardFooter from "../Card/CardFooter";
import CardBody from "../Card/CardBody";
import { CovidStatusFeature } from "./CovidStatus";
import { CovidTestingFeature } from "./CovidTesting";
import covidStyle from "../../assets/jss/great-state/components/covidStyle";

const delays = 80,
  durations = 500;

const useStyles = makeStyles((theme: Theme) => createStyles(covidStyle));

type CustomLabelProps = {
  x?: number;
  y?: number;
  stroke?: string;
  value?: object;
}
const CustomizedLabel:FC<CustomLabelProps> = ({x, y, stroke, value}) => {
   	return <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">{value}</text>
};

type CovidDaneCountyProps = {
  status?: CovidStatusFeature[];
  testing?: CovidTestingFeature[];
}

const CovidDaneCounty:FC<CovidDaneCountyProps> = ({status, testing}) => {
    const classes = useStyles();
    const chartData = status ? status.filter(f => f.attributes.NAME == "Dane").map(f => {
      return {
        "name": f.attributes.NAME,
        "positive": f.attributes.POSITIVE,
        "deaths": f.attributes.DEATHS,
        "newdeaths": f.attributes.DTH_NEW,
        "newpos": f.attributes.POS_NEW,
        "population": f.attributes.POP,
        "negative": f.attributes.NEGATIVE,
        "newneg": f.attributes.NEG_NEW,
        "hospitalization": f.attributes.HOSP_YES,
        "hospitalizaion_per_positive": ((f.attributes.HOSP_YES/f.attributes.POSITIVE) * 100)
      };
    }) : [];
    return (
      <>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Wisconsin Status</h4>
                <p className={classes.cardCategoryWhite}>
                  New employees on 15th September, 2016
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["OBJECTID","GEO","GEOID","NAME","DATE","POSITIVE","POS_NEW","NEGATIVE","NEG_NEW",
                              "DEATHS","DTH_NEW","TEST_NEW","HOSP_YES","HOSP_NO","HOSP_UNK","POP","POP_MOE","PCT_POP_65","PCT_SMK","PCT_COPD",
                              "PCT_CVD","PCT_DIAB","POP_65_WI","SMK_WI","COPD_WI","CVD_WI",
                              "DIAB_WI","Shape__Area","Shape__Length"]}
                  tableData={status ? status.filter(f => f.attributes.NAME == "Dane").map(d => Object.values(d.attributes)) : []}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Dane County Testing Centers</h4>
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
                  tableData={testing ? testing.filter(f => f.attributes.CMNTY_SRVD == "Dane").map(d => Object.values(d.attributes)) : []}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              <CardHeader color="success">
                <BarChart width={900} height={600} data={chartData}
                          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <XAxis dataKey="name" height={60}/>
                  <YAxis/>
                  <Tooltip/>
                  <Legend />
                  <Bar dataKey="positive" fill="#8884d8" label={<CustomizedLabel/>}/>
                  <Bar dataKey="newpos" fill="#8884d8"/>
                  <Bar dataKey="hospitalization" fill="#82ca9d" />
                  <Bar dataKey="deaths" fill="#f00c0c" />
                  <Bar dataKey="newdeaths" fill="#f00c0c" />
                </BarChart>
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Wisconsin Positive Tests</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{" "}
                  increase in today sales.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> today
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </>
    );
}

export default CovidDaneCounty;