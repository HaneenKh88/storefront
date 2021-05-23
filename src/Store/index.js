import products from './Products'
import categories from './CategoriesStore'

import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({categories: categories,products: products});

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();