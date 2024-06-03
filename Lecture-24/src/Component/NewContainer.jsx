import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { buy_cake } from '../Redux'

const NewContainer = () => {


     const numofcake = useSelector(state => state.numofcake)


     const dispatch = useDispatch()
  return (
    <div>
       <h1>numofcake:{numofcake}</h1>
      <button className='btn'  onClick={() => dispatch (buy_cake())} >increment</button>
    </div>
  )
}

export default NewContainer
