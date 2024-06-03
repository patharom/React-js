
import React from 'react'
import Comp_A from './Comp_A'
import { useReducer } from 'react'
import { createContext } from 'react'

let counter = createContext()

let initialState = 0

// const reducer = (state , action) => {
//   switch(action){
//     case 'ADD_TO_CART' : return state + 1
//     case 'REMOVE_TO_CART' : return state - 1
//     default : return state
//   }
// }

const reducer = (state , action) => {
  switch(action.type){
    case 'ADD_TO_CART' : return state + 1
    case 'REMOVE_TO_CART' : return state - 1
    default : return state
  }
}


const Comp_Main = () => {

  const [data , dispatch] = useReducer(reducer , initialState)

  return (
    <div>
      <counter.Provider value={data}>
        <Comp_A/>
      </counter.Provider>
      {/* <button className='btn' onClick={() => dispatch('ADD_TO_CART')}>Add To Cart</button>
      <button className='btn' onClick={() => dispatch('REMOVE_TO_CART')}>Remove To Cart</button> */}


      <button className='btn' onClick={() => dispatch({type:'ADD_TO_CART'})}>Add To Cart</button>
      <button className='btn' onClick={() => dispatch({type:'REMOVE_TO_CART'})}>Remove To Cart</button>
    </div>
  )
}

export default Comp_Main
export {counter}


/* reducer nagative counter remove */
/* reducer example user name , age print */

