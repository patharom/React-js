import { PRODUCT_ADD } from "./ProductConstant";

export const ProductData = async(data) => {
    let ProductList = await fetch('http://localhost:3000/Product')
    data = await ProductList.json()
    console.warn(data);
    console.warn('ProductDataAction Called' , data);
    return {
        type : PRODUCT_ADD
    }
}


