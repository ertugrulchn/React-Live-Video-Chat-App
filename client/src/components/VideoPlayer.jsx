import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';

import { SocketContext } from '../Context';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    borderRadius: '50px',
    transform: 'scaleX(-1)',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '20px',
    margin: '10px',
    background: 'url(https://i.pinimg.com/564x/87/e9/57/87e9575838649d0237c617948a967993.jpg)',
    borderRadius: '50px',
    color: '#ffffff',
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{name || 'MC Chat Kullanıcısı'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'İsim'}</Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
