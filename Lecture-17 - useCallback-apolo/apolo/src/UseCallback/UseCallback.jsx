
import React from 'react'
import Comp_A from './Comp_A'
import { useCallback , useState } from 'react'

const UseCallback = () => {

    const [add , setAdd] = useState(0)
    const [count , setCount] = useState(0)
    let user = useCallback(
        function profile(){
    
        } , [count]
    )


    return (
        <div>
            <span className='font-bold'>ADD: - {add}</span>
            <h1 className='text-2xl'>this is callback hook</h1>
            <Comp_A pro={user} value={count}/>
            <button className='btn' onClick={() => setAdd(add + 1)}>ADD</button>
            <button className='btn' onClick={() => setCount(count + 1)}>COUNT</button>
        </div>
    )
}

export default UseCallback
