import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { SocketContext } from '../Context';

const useStyles = makeStyles((theme) => ({
  call: {
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    background: 'url(https://i.pinimg.com/564x/77/e0/e8/77e0e8a7087306a8377d41788ac804f6.jpg)',
    backgroundRepeat: 'no-repeat',
    color: '#ffffff',
    width: '100%',
    height: '150px',
    textTransform: 'uppercase',
    fontFamily: 'sans-serif',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  callButton: {
    color: '#ffffff',
    width: '50%',
    height: '75px',
    borderRadius: '15px',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
}));

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className={classes.call}>
          <h3>{call.name} Arıyor:</h3>
          <Button className={classes.callButton} variant="contained" color="primary" onClick={answerCall}>
            Yanıtla
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
