import react from 'react'
import {useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {addTocart , removetocart} from '../productData/Redux/Action'
import {productData} from '../ProductData/productRedux/ProductAction'

const ProductMain = () => {

    const dispatch = useDispatch()

    const data = useSelector((state) => state.ProductReducer)

    console.warn('productMain', data);
    
    useEffect()
}


