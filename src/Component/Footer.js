import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    appFooter: {
    top: 'auto',
    bottom: 0,
    height:'70px',
    background: "#eeeeee",
    clear: "both",

  },
  title: {
    flexGrow: 1,
    color: 'black',
    fontSize: "1.3em",
    textAlign:"center"
  },
  
}));

function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="primary" className={classes.appFooter}>
      <Toolbar>
      <Typography variant="h6" className={classes.title}>
      © 2020 Javascript 401 <br></br>
      React + Redux + Material UI
    </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;