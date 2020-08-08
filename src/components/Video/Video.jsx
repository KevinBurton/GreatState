import React from 'react';

import michaelPRVideo from "assets/img/MichaelPR.mp4";
import "assets/css/video.css"

const Video = () => {
    return (
            <div className={'fullscreen-bg'}>
                <video
                    autoPlay
                    muted
                    loop
                    className={'fullscreen-bg__video'}
                >
                    <source src={michaelPRVideo} type='video/mp4' />
                    Your device does not support playing 'video/mp4' videos
                </video>
            </div>
    )
}

export default Video;