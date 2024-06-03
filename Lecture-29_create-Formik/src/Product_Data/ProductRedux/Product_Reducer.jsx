import {PRODUCT_LIST,  PRODUCT_SET } from "./Product_Constant";

const ProductReducer = (data = [], action) => {
    switch (action.type) {
        case PRODUCT_LIST:
            console.warn('ProducrReducer  Called', action);
            localStorage.setItem('productList' , JSON.stringify(action.data))
            return [...action.data]
        case PRODUCT_SET:
            console.warn('ProducrReducer  Called', action);
           localStorage.setItem('productList' , JSON.stringify(action.data))
            return [...action.data]
        default: return data
    }
}
export default ProductReducer