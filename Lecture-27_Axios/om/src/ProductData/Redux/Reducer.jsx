import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./Constant";

const getCartDataFromLocalStorage = () => {
    const cartData = localStorage.getItem('cart')
    return cartData ? JSON.parse(cartData) : []
}


const Reducer = (state = getCartDataFromLocalStorage() , action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn('addToCartReducer Called', action);
            const updatesCartAdd = [action.data , ...state]
            localStorage.setItem('cart', JSON.stringify(updatesCartAdd));
            return updatesCartAdd;

        case REMOVE_TO_CART:
            console.warn('removeToCartReducer Called', action);
            const updatesCartRemove = state.filter(item => item.id !== action.data)
            localStorage.setItem('cart', JSON.stringify(updatesCartRemove));
            return updatesCartRemove;

        case EMPTY_CART:
            console.warn('emptyCartReducer Called', action);
            localStorage.removeItem('cart')
            return []
            
        default: return state
    }
}

export default Reducer