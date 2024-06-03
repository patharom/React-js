import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./Constant";

const reducer = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn('addToCartReducer Called', action);
            return [action.data, ...data]
        case REMOVE_TO_CART:
            console.warn('removeToCartReducer Called', action);
            // data.length = data.length - 1
            data.length = data.length ? data.length -1 : []
            return [...data]
        case EMPTY_CART:
            console.warn('emptyCartReducer Called', action);
            return data = []
        default: return data
    }
}

export default reducer