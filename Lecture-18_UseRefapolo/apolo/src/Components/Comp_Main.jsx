
import React from 'react'
import Comp_A from './Comp_A'

const Comp_Main = () => {

    const name = "skillqode"

  return (
    <div>
      <h1>This is components Main</h1>
      <Comp_A name={name}/>
    </div>
  )
}

export default Comp_Main
