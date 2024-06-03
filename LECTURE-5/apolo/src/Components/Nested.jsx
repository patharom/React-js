
import React from 'react'


export const Button1 = (props) => {
        
    return(
        <>
            <button className='bg-purple-500 px-12 py-2 border-solid border-black border-2'>{props.name}</button>
        </>
    )
}
export const Button2 = (props) => {
    return(
        <>
            <button className='bg-green-500 px-12 py-2 border-solid border-black border-2'>{props.name}</button>
        </>
    )
}
export const Button3 = () => {
    return(
        <>
            <button className='bg-orange-500 px-12 py-2 border-solid border-black border-2'>Click Me</button>
        </>
    )
}
export const Button4 = () => {
    return(
        <>
            <button className='bg-blue-500 px-12 py-2 border-solid border-black border-2'>Click Me</button>
        </>
    )
}

const Nested = () => {
  return (
    <div>
      <Button1/>
      <Button2/>
      <Button3/>
      <Button4/>
    </div>
  )
}

export default Nested
