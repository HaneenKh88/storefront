import { useSelector } from 'react-redux';
import { If, Else, Then } from 'react-if';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		textAlign: 'center',
		margin: '5rem auto 5rem',
		fontSize: '1.5rem',
		padding: '0.5rem 1rem',
	},
}));

const SimpleCart = () => {
	const { root } = useStyles();

	const state = useSelector((state) => {
		return {
			TotalInventoryCount: state.products.TotalInventoryCount,
			products: state.products.products,
			cartProducts: state.products.cartProducts,
		};
	});

	return (
		<>
       
			<If condition={state.show}>
				<Then>
					<div></div>
				</Then>
				<Else>
                    <div style={{backgroundColor:"black", width:"800px", textAlign:"center", marginLeft:"250px", borderRadius: "1em"}}>
                    
					<Grid
						container
						justify="space-evenly"
						xs={5}
						spacing={3}
						className={root}
					>
                        <h2 style={{color:"white"}}>Orderd Items:</h2>
						{state.cartProducts.map((product) => {
							return (
								<Grid
									item
									key={product._id}
									style={{ marginBottom: '1rem', color:"white"}}
								>
                                   
									Product: {product.name} <br></br>
                                    Number: {state.TotalInventoryCount} . <br></br>
                                    Price: {product.price}$ .

                                    <br></br>
								</Grid>
							);
						})}
					</Grid>
                    </div>
				</Else>
			</If>
		</>
	);
};

export default SimpleCart;