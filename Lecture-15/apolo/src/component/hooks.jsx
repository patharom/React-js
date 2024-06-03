
import React from 'react'
import { useState , useMemo } from 'react'


/* React Hooks useMemo() */

const Use_Memo = () => {

    const [add , setAdd] = useState(0)
    const [count , setCount] = useState(0)

    function added(){
        console.log('added called')
        return setAdd(add + 1)
    }

    function counter(){
        console.log('counter called')
        return setCount(count + 10)
    }

    const Multiplication  = useMemo(function multiplication(){
        console.log('multiplication called');
        return add * 10
    } , [add])
    
    


  return (
    <div>
        <h1 className='text-4xl'>React Hook useMemo</h1>
        <div className='btn1'>Multiplication : -{Multiplication}</div>
        <div className='btn1'>Add :- {add}</div>
        <div className='btn1'>count :-{count}</div>
        <button className='btn' onClick={added}>Click Add</button>
        <button className='btn' onClick={counter}>Click Count</button>
    </div>
  )
}

export default Use_Memo
