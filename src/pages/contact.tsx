import React from 'react';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

import Location from '../components/Location';

import Layout from "../components/layout"
import SEO from "../components/seo"

const center = {
    lat: 43.035419,
    lng: -89.380748
};


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    colorTextPrimary: {
        color: 'blue'
    },
    iconDisplay: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
   }
});
export const PureContact = () => {
    const classes = useStyles();
    return (
        <>
            <Box display="flex"
            flexWrap="nowrap">
                <Card className={classes.root}>
                    <CardContent>
                        <Box display="flex" 
                            alignItems="center"
                            justifyContent="center">
                            <ScheduleIcon htmlColor="blue" />
                        </Box>
                        <Typography className={classes.colorTextPrimary} align="center" variant="h5" component="h2" color="textPrimary">Hours of Operation</Typography>
                        <Typography align="center" variant="body2" color="textSecondary" component="p">Mon-Fri: 5:30am-7pm</Typography>
                        <Typography align="center" variant="body2" color="textSecondary" component="p">Saturday: 12pm-3pm</Typography>
                        <Typography align="center" variant="body2" color="textSecondary" component="p">(Doors are locked when no classes are scheduled.)</Typography>
                    </CardContent>
                </Card>
                <Card className={classes.root}>
                    <CardContent>
                        <Box display="flex"
                            alignItems="center"
                            justifyContent="center">
                            <CallIcon htmlColor="blue" />
                        </Box>
                        <Typography align="center" variant="body2" color="textSecondary" component="p">(608) 338-8016</Typography>
                    </CardContent>
                </Card>
                <Card className={classes.root}>
                    <CardContent>
                        <Box display="flex"
                            alignItems="center"
                            justifyContent="center">
                            <LocationOnIcon htmlColor="blue" />
                        </Box>
                        <Typography align="center" variant="body2" color="textSecondary" component="p">2500 Rimrock Road</Typography>
                        <Typography align="center" variant="body2" color="textSecondary" component="p">Suite 104</Typography>
                        <Typography align="center" variant="body2" color="textSecondary" component="p">Madison, WI 53713</Typography>
                    </CardContent >
                </Card >
            </Box>
            <Location center={center} />
            <img alt="Gym" src={`https://maps.googleapis.com/maps/api/streetview?location=43.035419,-89.380748&size=456x456&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&signature=cR0crY9s9D2zswQOdpOCoqlmmsw=`}/>
        </>
    )
};

const Contact = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <PureContact/>
        </Layout>
    );
}

export default Contact;