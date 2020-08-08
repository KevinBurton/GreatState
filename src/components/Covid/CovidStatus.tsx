import React, { FC }  from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer.js";
import Table from "../Table/Table.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardFooter from "../Card/CardFooter.js";
import CardBody from "../Card/CardBody.js";

import covidStyle from "../../assets/jss/great-state/components/covidStyle";

const delays = 80,
  durations = 500;

const useStyles = makeStyles((theme: Theme) => createStyles(covidStyle));

export interface CovidStatusInfo {
  GEO: string;
  NAME: string;
  POSITIVE: number;
  NEGATIVE: number;
  DEATHS: number;
  OBJECTID: number;
  GEOID: string;
  POP: number;
  LoadDttm: number;
  PCT_POP_65: number;
  PCT_SMK: number;
  PCT_COPD: number;
  PCT_CVD: number;
  PCT_DIAB: number;
  POP_65_WI: number;
  SMK_WI: number;
  COPD_WI: number;
  CVD_WI: number;
  DIAB_WI: number;
  DATE: number;
  Shape__Area: number;
  Shape__Length: number;
}
export interface CovidStatusFeature {
  attributes: CovidStatusInfo
}
type CovidStatusProps = {
  features: CovidStatusFeature[];
}

const CovidStatus:FC<CovidStatusProps> = ({features}) => {
    const classes = useStyles();
    const chartLabels = features.reduce((acc, f) => acc.concat(f.attributes.NAME), []);
    const chartSeries = features.reduce((acc, f) => acc.concat(f.attributes.POSITIVE), []);
    const chartOptions =  
    {
      data: {
        labels: chartLabels,
        series: [chartSeries]
      },
      options: {
        axisX: {
          showGrid: false
        },
        low: Math.min(...chartSeries),
        high: Math.max(...chartSeries),
        chartPadding: {
          top: 0,
          right: 5,
          bottom: 0,
          left: 0
        }    
      },
      responsiveOptions: [
        [
          "screen and (max-width: 640px)",
          {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function(value) {
                return value[0];
              }
            }
          }
        ]
      ],
      animation: {
        draw: function(data) {
          if (data.type === "bar") {
            data.element.animate({
              opacity: {
                begin: (data.index + 1) * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: "ease"
              }
            });
          }    
        }
      }
    };
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
                  tableHead={["GEO","NAME","POSITIVE","NEGATIVE","DEATHS","OBJECTID",
                              "GEOID","POP","LoadDttm","PCT_POP_65","PCT_SMK","PCT_COPD",
                              "PCT_CVD","PCT_DIAB","POP_65_WI","SMK_WI","COPD_WI","CVD_WI",
                              "DIAB_WI","DATE","Shape__Area","Shape__Length"]}
                  tableData={features.map(d => Object.values(d.attributes))}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={chartOptions.data}
                  type="Bar"
                  options={chartOptions.options}
                  listener={chartOptions.animation}
                />
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

export default CovidStatus;