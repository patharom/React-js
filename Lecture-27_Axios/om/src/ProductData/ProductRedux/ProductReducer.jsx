import { PRODUCT_LIST , PRODUCT_SET } from "../Redux/Constant";

const ProductReducer = (state = [], action) => {
    switch (action.type) {
        case PRODUCT_LIST:
            console.warn('ProductReducer Called', action);
            localStorage.setItem('productList' , JSON.stringify(action.data));
            return [...action.data]
        case PRODUCT_SET:
            console.warn('ProductReducer Called', action);
            localStorage.setItem('productList' , JSON.stringify(action.data));
            return [...action.data]
        default: return state
    }
}

export default ProductReducer