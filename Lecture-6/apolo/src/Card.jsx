import React from 'react'
import om from "./assets/virat-kohli-thumb1702286545.jpg"

const card = (props) => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='max-w-[350px] h-fit-conetent  mx-4 shadow-xl shadow-blue-600'>
                <div>
                    <img className='w-[350px] h-[330px] object-cover bg-cover' src={om} alt="" />
                </div>
                <div className='p-4'>
                    <h1 className='text-2xl font-bold mb-2 hover:bg-yello-300'>{props.title}</h1>
                    <p className='hover:text-blue-600'>Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team. He is a right-handed batsman and an occasional medium-fast bowler. He currently represents Royal Challengers Bengaluru in the IPL and Delhi in domestic cricket.
                    </p>
                    <a className='btn inline-block mt-4 hover:bg-sky-700  hover:text-pink-700' href=''>
                        {props.name}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default card