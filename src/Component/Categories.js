import React from 'react';
import { Category } from '../Store/CategoriesStore';
import { connect } from 'react-redux';
import { Button, Typography} from '@material-ui/core';


const Categories = (props) => {

   
    return (
        <>
            {props.activeOne.categories.map((category) => {
                return (
                    <>
                    
                    <Typography
                        key={category.name}
                        onClick={() => props.Category(category.name)}
                        style={{float:"left"}}
                       
                    >
                       <Button>
                        {category.displayName}
                        </Button>
                       
                       
                    </Typography>
                  
                   </>
                ) 
               

            }
            )}

        </>
    )

}

const mapStateToProps = state => ({
    activeOne: state.categories
});

const mapDispatchToProps = { Category }

export default connect(mapStateToProps, mapDispatchToProps)(Categories)