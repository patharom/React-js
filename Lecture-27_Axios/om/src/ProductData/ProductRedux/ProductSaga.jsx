import {put , takeEvery} from 'redux-saga/effects'
import { PRODUCT_LIST , PRODUCT_SET } from '../Redux/Constant';
import axios from 'axios';

function* getProduct(){
    try{
        let response = yield axios.get('http://localhost:3000/Product')
        yield put({type:PRODUCT_SET , data : response.data})
    }catch(error){
        console.log(error);
    }
} 

function* productSaga(){
    yield takeEvery(PRODUCT_LIST , getProduct)
}

export default productSaga