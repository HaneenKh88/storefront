import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar,Typography, Button } from '@material-ui/core';


const useStyles = makeStyles(() => ({
  
  title: {
    flexGrow: 1,
    color: 'black',
    fontSize: "2em",
  },

  navBar:
  {
    background: "#f5f5f5",
  },
  button:
  {
    color: 'black',
    fontSize: "1em",
  },
}));


function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.navBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
        Our Store
    </Typography>
        <Button  className={classes.button} color="inherit" >Cart (0)</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header;