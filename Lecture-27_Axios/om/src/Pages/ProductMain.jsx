import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeToCart} from '../ProductData/Redux/Action'
import { ProductData } from '../ProductData/ProductRedux/ProductAction'

const ProductMain = () => {

  const dispatch = useDispatch()

  const data = useSelector((state) => state.ProductReducer)

  console.warn('ProductMain', data);


  useEffect(() => {
    dispatch(ProductData())
  } , [])

  return (
    <div>
      {/* <button className='btn' onClick={() => dispatch(addToCart(product))}>AddToCart</button>
      <button className='btn' onClick={() => dispatch(removeToCart(product))}>RemoveToCart</button>
      <button className='btn' onClick={() => dispatch(emptyCart())}>EmptyCart</button> */}
      {/* <button className='btn' onClick={() => dispatch(ProductData())}>ProductCart</button> */}

      <div className="flex flex-wrap justify-between mt-10">
        {
          data.flat().map((item) => {
            return (
              <>
                <div key={item.id} className='w-72 border-2 border-solid border-black mb-2'>
                  <div>
                    <img  className="h-64 mx-auto" src={item.image} alt="" />
                    <p>{item.title}</p>
                    <span>{item.price}</span>
                  </div>
                  <div className='flex h-20 p-2'>
                    <button className='btn' onClick={() => dispatch(addToCart(item))}>AddCart</button>
                    <button className='btn' onClick={() => dispatch(removeToCart(item))}>RemoveCart</button>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductMain