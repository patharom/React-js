import {combineReducers} from 'redux'
import ProductReducer from './ProductRedux/Product_Reducer'
import Reducer from './Redux/Reducer'

const RootReducer  = combineReducers({
    Reducer,
    ProductReducer
})

export default RootReducer