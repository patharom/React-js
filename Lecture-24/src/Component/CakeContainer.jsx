import React from 'react'
import { buy_cake } from '../Redux'
import { useSelector,useDispatch } from 'react-redux'

const CakeContainer = () => {

    const numofcake =useSelector(state => state.cake.numofcake)


    const dispatch = useDispatch()
  return (
    <div>
      <h1> num of cake : {numofcake}</h1>
      <button onClick={() => dispatch (buy_cake())} className='btn'>click</button>
    </div>
  )
}

export default CakeContainer


