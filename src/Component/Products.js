import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  
    media: {
      height: 140,
    },
  });

const Status = (props) => {
    const classes = useStyles();
  return (
      
    <>
      {props.MyProduct.map((product) => {
        return (
          <>
          <div style={{ float: "right",width: "25%", marginRight:"20px", marginTop:"40px"}}>
            <br></br>
            <Card className={classes.root}  >
            <CardActionArea >
              <CardMedia
                className={classes.media}
                image={product.image}
                style={{height:"250px"}}
              />
             
          <CardContent  key={product.id}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body1" component="p">
              Price: {product.price}$
            </Typography>
            <Typography variant="body1" component="p">
              In Stock: {product.inStock} Piece.
            </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
             ADD TO CART
           </Button>
            <Button size="small" color="primary">
             VIEW DETAILS
            </Button>
           </CardActions>
           </Card>
           </div>
           </>
        );
        
      })}
    
    </>
  )
}

const mapStateToProps = state => ({
 
  Products: state.products.products,
  MyProduct: state.products.Product,
  
});



export default connect(mapStateToProps)(Status);






