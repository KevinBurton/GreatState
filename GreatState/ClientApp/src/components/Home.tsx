import React from 'react';
import { connect } from 'react-redux';

import './Video.css';
import background from './MichaelPR.mp4';

const Home = () => (
    <>
        <div className="fullscreen-bg">
            <video loop muted autoPlay className="fullscreen-bg__video">
                <source src={background} type="video/mp4" />
                <source src={background} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div>
            <img className="logo" alt="Great State" src="/assets/img/greatstate.png" />
        </div>
    </>
);

export default connect()(Home);
