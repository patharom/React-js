
import React, { useContext } from 'react'
import { data , data1 } from './Comp_Main'


const Comp_C = () => {

  const firstname = useContext(data)
  const gender = useContext(data1)

  return (
    <div>
      <h1>My Name is {firstname} And My Gender is {gender}</h1>         
    </div>
  )
}

export default Comp_C
