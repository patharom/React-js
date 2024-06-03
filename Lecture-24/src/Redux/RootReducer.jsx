import CakeReducer from './Cake/CakeReducer'
import ChocoReducer from'./Choco/ChocoReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    cake:CakeReducer,
    choco:ChocoReducer
})

export default rootReducer