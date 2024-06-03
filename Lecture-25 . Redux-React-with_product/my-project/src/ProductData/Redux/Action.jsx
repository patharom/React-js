import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART } from "./Constant"

export const addToCart = (data) => {
    console.warn('addToCartAction called' , data);
    return {
        type : ADD_TO_CART,
    }
}

export const removeToCart = (data) => {
    console.warn('removeToCartAction called' , data);
    return {
        type : REMOVE_TO_CART,
    }
}

export const emptyCart = () => {
    console.warn('emptyCartAction called');
    return {
        type : EMPTY_CART,
    }
}