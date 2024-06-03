
import React from 'react'
import Comp_C from './Comp_C'

const Comp_B = ({name}) => {
  return (
    <div>
      <h1> This is components B {name}</h1>
      <Comp_C name={name}/>
    </div>
  )
}

export default Comp_B
