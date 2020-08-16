import React, { FC } from 'react';
import { navigate } from 'gatsby';
import Carousel from "react-material-ui-carousel"
import autoBind from "auto-bind"
import { CarouselItem } from './CarouselItem';
import '../../assets/scss/carouselbanner.scss';

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button,
} from '@material-ui/core';
import { number } from 'prop-types';

type BannerProps = {
    onClick: (event) => void;
    banneritem: CarouselItem;
    length?: number;
    contentPosition: 'left' | 'right' | 'middle';
};
const Banner:FC<BannerProps> = ({onClick, banneritem, length = 3, contentPosition}) => {
    const totalItems = length;
    const mediaLength = totalItems - 1;

    let items = [];
    const content = (
        <Grid item xs={12 / totalItems} key="content">
            <CardContent className="Content">
                <Typography className="Title">
                    {banneritem.Name}
                </Typography>

                <Typography className="Caption">
                    {banneritem.Caption}
                </Typography>

                <Button onClick={(e) => onClick(e)} variant="outlined" className="ViewButton">
                    Start Now
                </Button>
            </CardContent>
        </Grid>
    )


    for (let i = 0; i < mediaLength; i++) {
        const sideitem = banneritem.Items[i];

        const media = (
            <Grid item xs={12 / totalItems} key={sideitem.Name}>
                <CardMedia
                    className="Media"
                    image={sideitem.Image}
                    title={sideitem.Name}
                >
                    <Typography className="MediaCaption">
                        {sideitem.Name}
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
type CarouselBannerProps = {
    items: CarouselItem[]
};
type CarouselBannerState = {
    autoPlay: boolean;
    timer: number;
    animation: 'fade' | 'slide' | undefined;
    indicators: boolean;
    timeout: number;
    navButtonsAlwaysVisible: boolean;
    navButtonsAlwaysInvisible: boolean;
}

class CarouselBanner extends React.Component<CarouselBannerProps, CarouselBannerState> {
    constructor(props: CarouselBannerProps) {

        super(props);

        this.state = {
            autoPlay: true,
            timer: 500,
            animation: 'fade',
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

    changeTimeout(event, value: number) {
        this.setState({
            timeout: value
        })
    }

    onClickStart(event) {
        navigate('/public/gettingstarted');
    }

    render() {
        return (
            <div style={{marginTop: "50px", color: "#494949"}}>
                <Carousel
                    className="Example"
                    autoPlay={this.state.autoPlay}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                    navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
                >
                    {
                        this.props.items && this.props.items.map((item, index) => {
                            return <Banner onClick={this.onClickStart} banneritem={item} key={index} contentPosition={item.contentPosition}/>
                        })
                    }
                </Carousel>
            </div>
        )
    }
}
 
export default CarouselBanner;