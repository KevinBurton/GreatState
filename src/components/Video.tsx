import React from 'react';
import styled from 'styled-components';
import { Theme, useTheme, makeStyles, createStyles, withTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const FullscreenBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -100;
  @media all and (min-width : 320px) and (max-width: 767px) {
     background: url('./assets/img/MichaelPR.jpg') center center / cover no-repeat;
  }
`
const FullscreenBackgroundVideo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  min-height: 100%;
  z-index: -100;
  -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
  @media all and (min-width : 320px) and (max-width: 767px) {
      display: none;
  }
`
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'inline-block',
      position: 'fixed',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      overflow: 'hidden',
      zIndex: -100,
      padding: theme.spacing(1),
      [theme.breakpoints.up('md')]: {
        background: 'url("./assets/img/MichaelPR.jpg") center center / cover no-repeat'
      },
    },
    video: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 'auto',
      height: 'auto',
      minHeight: '100%',
      WebkitTransform: 'translate(-50%, -50%)',
      MozTransform: 'translate(-50%, -50%)',
      MsTransform: 'translate(-50%, -50%)',
      transform: 'translate(-50%, -50%)',
      display: 'inline-block',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    }
  })
);

export default () => {
  const styles = useStyles();
    return (
            <div className={styles.root}>
                <video
                    autoPlay
                    muted
                    loop
                    className={styles.video}
                >
                    <source src='./assets/vid/MichaelPR.mp4' type='video/mp4' />
                    Your device does not support playing 'video/mp4' videos
                </video>
            </div>
    )
}