import React from 'react'

/* React with useEffect Hooks */

/*
useEffect(setup , dependensis!) 
*/
import {usestate , useEffect} from 'react'

const Use_Effect = () => {

    const [data , setData] = usestate(0)

    function handleclick(){
        setData(data +1)
    }

    //useEffect()

    return (
        <div>
            <span className=''>{data}</span>
             <button className='btn'onclick={handleclick}></button>
        </div>
    )
}
export default Use_Effect