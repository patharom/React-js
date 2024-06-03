
import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART } from "./Constant";


export const addToCart = (data) =>{
    console.warn('addToCartAction Called' , data);
    return{
        type:ADD_TO_CART,
        data
    }
}

export const removeToCart = (data) =>{
    console.warn('removeToCartAction Called' , data);
    return{
        type:REMOVE_TO_CART,
        data
    }
}

export const emptyCart = () =>{
    console.warn('removeToCartAction Called');
    return{
        type:EMPTY_CART
    }
}
