import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeToCart,
  emptyCart,
} from "../Product_Data/Redux/Action";
import { productData } from "../Product_Data/ProductRedux/ProductAction";

const ProductMain = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ProductReducer);

  console.log("maindata", data);

  useEffect(() => {
    dispatch(productData());
  }, []);

  return (
    <div>
      {/* <button className='btn' onClick={() =>dispatch(addToCart(product))}>Add To Cart</button>
      <button className='btn' onClick={() =>dispatch(removeToCart(product))}>Remove To Cart</button> */}
      {/* <button className="btn" onClick={() => dispatch(emptyCart())}>
        Ematy Cart
      </button> */}
      <button className="btn" onClick={() => dispatch(productData())}>
        Product Cart
      </button>

      <div className="flex flex-wrap justify-between">
        {data.flat().map((item) => {
          return (
            <>
              <div key={item.id} className="flex flex-wrap ">
                <div className="w-[300px] border-2 border-solid border-black">
                <div className="flex justify-center">
                  <img src={item.image} className="w-[250px] h-[320px] mb-[20px]"></img>
                </div>
                  <p className="font-bold text-[19px]">{item.title}</p>
                  <sapn className='text-red-600 text-[17px] font-bold'>${item.price}</sapn>
                  <div className="flex items-end justify-between">
                  <button
                    className="px-[20px] py-[7px] bg-blue-500 border-solid border-2 border-black"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    Add To Cart
                  </button>
                  <button
                    className="px-[20px] py-[7px] bg-blue-500 border-solid border-2 border-black"
                    onClick={() => dispatch(removeToCart(item))}
                  >
                    Remove To Cart
                  </button>

                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProductMain;
