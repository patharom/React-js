
import React from 'react'

const Images = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className='w-64 border-2 border-solid'>
                    <div className='overflow-hidden  h-64 w-64'>
                        <img className='h-64 w-64 hover:scale-125 duration-1000' src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Monstera.webp" alt="" />
                    </div>
                    <div className=''>
                        <h1 className='text-2xl'>This is Card Text</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptate cupiditate illo eius architecto sapiente, nulla quo nostrum, qui praesentium magni quod sequi, beatae nesciunt rem dolore excepturi laboriosam tempora.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Images
