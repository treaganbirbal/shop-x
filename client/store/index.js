import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import products from './allProducts'
import singleProduct from './singleProduct'
import allUsers from './allUsers'
import order from './order'
const reducer = combineReducers({user, products, singleProduct, order, allUsers})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './allProducts'
export * from './singleProduct'
export * from './allUsers'
