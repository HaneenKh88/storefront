import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { increment, getCartProducts } from '../Store/Products';
import { If, Else, Then } from 'react-if';
import SimpleCart from './Cart';

import {Grid} from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		maxWidth: 280,
		flexGrow: 1,
		margin: '1rem',
    
	},

	typography: {
		textAlign: 'center',
		fontSize: '2rem',
	},

	h2: {
		textAlign: 'center',
		fontSize: '3rem',
		marginBottom: '7rem',
	},
});

const Products = () => {
	const classes = useStyles();
	const { h2 } = useStyles();

	const state = useSelector((state) => {
		return {
			TotalInventoryCount: state.products.TotalInventoryCount,
			products: state.products.products,
			cartProducts: state.products.cartProducts,
			show: state.products.show,
			active: state.categories.active,
      description: state.products.products[0].description
		};
	});

	let activeProducts = state.products.filter(
		(product) => product.categoryAssociation === state.active,
	);

	const dispatch = useDispatch(getCartProducts);

	const handleClick = (id) => {
		dispatch(increment(id));
		dispatch(getCartProducts(id));
	};
console.log(state.description);
	return (
		<>
			<If condition={!state.show}>
				<Then>
					<h2 className={h2}>{state.active}</h2>
					{/* <h2 className={h2}>{products}</h2> */}

					<Grid
						container
						justify="center"
						wrap="wrap"
						spacing={0}
						style={{ marginBottom: '10rem' }}
					>
						<Grid container item wrap="wrap" xs={10} spacing={0}>
							<Grid container justify="space-evenly" wrap="wrap" spacing={8}>
								{activeProducts.map((product, i) => (
									<Card key={i} className={classes.root}>
										<CardActionArea>
											<CardMedia
												component="img"
												alt={product.name}
												height="220"
												image={product.img}
												title={product.name}
											/>
											<CardContent>
												<Typography gutterBottom variant="h5" component="h2">
													{product.name}
												</Typography>
												<Typography
													variant="body2"
													color="textSecondary"
													component="p"
												>
												{`Price: ${product.price}.`}	
                          
												</Typography>
                  
                        <Typography
													variant="body2"
													color="textSecondary"
													component="p"
												>
                           {product.stock > 0
                      ? `In stock: ${product.stock} Items.`
                      : 'Out of Stock'}
												
												</Typography>
											</CardContent>
										</CardActionArea>
										<CardActions>
											<Button size="small" color="primary">
												View More
											</Button>
											<Button
												size="small"
												color="primary"
												onClick={() => handleClick(product.id)}
                        disabled={product.stock > 0 ? false : true}
											>
												Add to Cart
											</Button>
										</CardActions>
									</Card>
								))}
							</Grid>
						</Grid>
					</Grid>
				</Then>
				<Else>
					<SimpleCart />
				</Else>
			</If>
		</>
	);
};

export default Products;
