import React from 'react';
import { withRouter } from 'react-router-dom';
import Carousel from "react-material-ui-carousel"
import autoBind from "auto-bind"
import 'assets/scss/carouselbanner.scss';

import Evolution from "assets/img/progression-lose-weight.png";
import Excercise from "assets/img/exercise-words.jpg";
import Bike from "assets/img/conditioning-bike.jpg";
import Sharp from "assets/img/weight-lifting-women-back.jpg";
import Load from "assets/img/weight-lifting-load.jpg";
import Start from "assets/img/weight-lifting-start.jpg";

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button,
} from '@material-ui/core';

function Banner(props) {
    if (props.newProp) console.log(props.newProp)
    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;

    let items = [];
    const content = (
        <Grid item xs={12 / totalItems} key="content">
            <CardContent className="Content">
                <Typography className="Title">
                    {props.item.Name}
                </Typography>

                <Typography className="Caption">
                    {props.item.Caption}
                </Typography>

                <Button onClick={() => props.onClick()} variant="outlined" className="ViewButton">
                    Start Now
                </Button>
            </CardContent>
        </Grid>
    )


    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={12 / totalItems} key={item.Name}>
                <CardMedia
                    className="Media"
                    image={item.Image}
                    title={item.Name}
                >
                    <Typography className="MediaCaption">
                        {item.Name}
                    </Typography>
                </CardMedia>

            </Grid>
        )

        items.push(media);
    }

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}

const items = [
    {
        Name: "Lose Weight",
        Caption: "Lose Weight",
        contentPosition: "left",
        Items: [
            {
                Name: "Evolution",
                Image: Evolution
            },
            {
                Name: "Did you do it?",
                Image: Excercise
            }
        ]
    },
    {
        Name: "Conditioning",
        Caption: "Conditioning",
        contentPosition: "middle",
        Items: [
            {
                Name: "Bike",
                Image: Bike
            },
            {
                Name: "Sharp",
                Image: Sharp
            }
        ]
    },
    {
        Name: "Strength",
        Caption: "Lift weights",
        contentPosition: "right",
        Items: [
            {
                Name: "Ready",
                Image: Load
            },
            {
                Name: "Set",
                Image: Start
            }
        ]
    }
]

class CarouselBanner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: true,
            timer: 500,
            animation: "fade",
            indicators: true,
            timeout: 500,
            navButtonsAlwaysVisible: false,
            navButtonsAlwaysInvisible: false
        }

        autoBind(this);
    }

    toggleAutoPlay() {
        this.setState({
            autoPlay: !this.state.autoPlay
        })
    }

    toggleIndicators() {
        this.setState({
            indicators: !this.state.indicators
        })
    }

    toggleNavButtonsAlwaysVisible()
    {
        this.setState({
            navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible
        })
    }

    toggleNavButtonsAlwaysInvisible()
    {
        this.setState({
            navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible
        })
    }

    changeAnimation(event) {
        this.setState({
            animation: event.target.value
        })
    }

    changeTimeout(event, value) {
        this.setState({
            timeout: value
        })
    }

    onClickStart(event) {
        this.props.history.push('/public/gettingstarted');
    }

    render() {
        return (
            <div style={{marginTop: "50px", color: "#494949"}}>
                <Carousel
                    className="Example"
                    autoPlay={this.state.autoPlay}
                    timer={this.state.timer}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                    navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
                >
                    {
                        items.map((item, index) => {
                            return <Banner onClick={this.onClickStart} item={item} key={index} contentPosition={item.contentPosition}/>
                        })
                    }
                </Carousel>
            </div>
        )
    }
}

export default withRouter(CarouselBanner);