import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categories from './CategoriesStore';
import products from './Products';

const reducers = combineReducers({ categories, products });

const store = () => {
	return createStore(reducers, applyMiddleware(thunk));
};

export default store();