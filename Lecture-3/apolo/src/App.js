
import React from "react";
import {useRef} from 'react'



export default function App() {
  // const reference =  useRef(0)
  const textRef = useRef(0)
  const divelement = useRef(null)
  // const HandleClick = () =>{
  //   reference.current = reference.current + 1
  //   alert('you Click' + reference.current + 'times')
  // }

  const HandleClick2 = () =>{
    textRef.current.focus()
  }


  const HandleClick3 = () =>{
    divelement.current.style.color = "red"
    divelement.current.style.background = "green"
  }
  


  return ( 
    <>
      <div ref={divelement} className="h-96 w-96 border border-solid border-2">
        this is div elements
      </div>
      <input ref={textRef} type="text"></input>
      <button className="btn" onClick={HandleClick2}>Submit</button>
      <button onClick={HandleClick3}>ClickDiv</button>
    </>
  )
}



