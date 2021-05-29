import React from 'react';
import { getCategory } from '../Store/CategoriesStore';
import { Button, Typography} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { handleItemShow, deleteCart } from '../Store/Products';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		maxWidth: 250,
        color:"white",
		position: 'absolute',
		right: '1%',
		top: '15%',
		overflow: 'auto',
		maxHeight: 150,
        marginLeft:"150px",
        borderRadius: '1rem',
       
		
	},
	listSection: {
		backgroundColor: 'inherit',
	},
	ul: {
		backgroundColor: 'inherit',
		padding: 0,
	},
    Delete:
    {
        cursor: 'pointer',
        color: 'red',
    },

    list:
    {
        marginTop: '5rem',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        
       
    },

    Category:
    {
        backgroundColor: "black",
        color: "white",
        width: '9rem', 
        marginRight:"80px", 
       
    }
}));


const Categories = (props) => {

    const classes = useStyles();

	const state = useSelector((state) => {
		return {
			TotalInventoryCount: state.products.TotalInventoryCount,
			categories: state.categories.categories,
			active: state.categories.active,
			cartProducts: state.products.cartProducts,
			products: state.products.products,
		};
	});

    const dispatch = useDispatch();

	const handleClick = (name) => {
		dispatch(handleItemShow(false));
		dispatch(getCategory(name));
	};

	const handleRemove = (id) => {
		dispatch(deleteCart(id));
	};

    return (
        <>
        
          <ul className={classes.list}>
				{state.categories.map((category, i) => (
				
                          <Typography
                        key={i}
                        onClick={() => handleClick(category.name)}
                        style={{float:"left", cursor: 'pointer'}}
                       
                    >
						<Button
                        className={classes.Category}
						variant="contained"
						>
							{category.name}
							
						</Button>
                        
                        </Typography>
					
				))}
               
				<List className={classes.root} subheader={<li />}>
					{state.cartProducts.map((product) => (
                         <div  style={{backgroundColor:"black"}}>
						<li key={product.id} className={classes.listSection}>
							<ListItem key={product._id}>
								<ListItemText primary={product.name} />
								<HighlightOffIcon
                                className={classes.Delete}
									onClick={() => handleRemove(product._id)}
								/>
							</ListItem>
						</li>
                        </div>
					))}
                   
				</List>
			</ul>
           

        </>
    )

}



export default Categories;