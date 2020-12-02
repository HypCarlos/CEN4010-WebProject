import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productListReducer} from './CartReducer';
import {cartReducer} from './CartReducer'


const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = {cart: {cartItems } };
const reducer = combineReducers({
    productList : cartReducer,
    // productDetails : productListReducer,
    cart: cartReducer
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store;