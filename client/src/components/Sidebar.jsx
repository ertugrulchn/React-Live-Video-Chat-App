import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { SocketContext } from '../Context';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridContainer: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  container: {
    width: '600px',
    margin: '35px 0',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 20,
    color: '#ffffff',
  },
  paper: {
    padding: '10px 20px',
    borderRadius: '15px',
    background: 'url(https://i.pinimg.com/564x/70/94/ad/7094ad04979f93eb34fa164cf5be5a14.jpg)',
    color: '#fff',
  },
}));

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6" className={classes.text}>Kullanıcı Adı</Typography>
              <TextField label="Adın" value={name} onChange={(e) => setName(e.target.value)} inputProps={{ maxLength: 30 }} />
              <CopyToClipboard text={me} className={classes.margin}>
                <Button variant="contained" color="primary" fullWidth style={{ background: '#19ACD5' }} startIcon={<Assignment fontSize="large" />}>
                  ID ni Kopyala
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6" className={classes.text}>Çağrı Oluştur</Typography>
              <TextField label="Arkadaşının ID'si" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} className={classes.margin}>
                  Çağrıyı Sonlandır
                </Button>
              ) : (
                <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} style={{ background: '#19D551' }} className={classes.margin}>
                  Ara
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Sidebar;
