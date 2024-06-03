
import React from 'react'
import { Product } from '../Product'
import { useState } from 'react'

const Card = () => {

    const[index , setIndex] =useState(0)


    // let index = 0

    
    function Next() {
        // index = index + 1
        // console.log(index);
        setIndex(index + 1)
    }
    function Prev() {
        // index = index - 1
        // console.log(index);
        setIndex(index - 1)
    }

    let ProductData = Product[index]
    return (
        <div>
            <button onClick={Next} className='btn'>Next</button>
            <button onClick={Prev} className='btn'>Prev</button>
            ({index+1} of {Product.length})
            <div className='flex justify-center'>
                <div className='w-[300px] border-2 border-solid border-black rounded-xl overflow-hidden p-4'>
                    <div className='flex justify-center p-4'>
                        <img className='h-[150px] w-[150px]' src={ProductData.image} alt="" />
                    </div>
                    <div className='bg-purple-500 rounded-2xl p-4'>
                        <h1 className='font-bold'>{ProductData.title}</h1>
                        <p>{ProductData.description}</p>
                        <span className='font-bold'>_{ProductData.category}</span>
                        <span className='font-bold ms-12'>${ProductData.price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
