import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

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
      [theme.breakpoints.down('md')]: {
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
      [theme.breakpoints.down('md')]: {
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