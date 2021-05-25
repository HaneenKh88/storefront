import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, Button, Link } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { handleItemShow } from '../Store/Products';

const useStyles = makeStyles(() => ({

  title: {
    flexGrow: 1,
    color: 'black',
    fontSize: "1.5em",
    
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

  Cart:
  {
    color: "black",
    fontSize: "1em",
  }
}));


function Header() {
  const classes = useStyles();
  const state = useSelector((state) => {
    return {
      TotalInventoryCount: state.products.TotalInventoryCount,
      show: state.products.show,
    };
  });
  const dispatch = useDispatch();

  return (
    <AppBar position="static" className={classes.navBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title} >
        <Link color="inherit" href="/">
          Our Store
          </Link>
        </Typography>

        <Typography
          variant="h6"
          className={classes.Cart}
          onClick={() => {
            dispatch(handleItemShow(!state.show));
          }}
        >
          
       <Button className={classes.button} color="inherit" >Cart({state.TotalInventoryCount})</Button>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;