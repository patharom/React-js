
import React from 'react'
import Comp_A from './Comp_A'
import { createContext } from 'react'


/* create  , provider and consumer */

const data = createContext()
const data1 = createContext()

const Comp_Main = () => {

  const name = "Yogesh"
  const gender = "Male"

  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <h1>This is components Main</h1>
          <Comp_A />
        </data1.Provider>
      </data.Provider>
    </div>
  )
}

export default Comp_Main
export { data  , data1}
