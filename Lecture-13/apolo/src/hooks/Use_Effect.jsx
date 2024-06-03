
import React from 'react'

/* React With useEffect Hooks */

/*

useEffect(setup , dependensis!)

*/

import { useState, useEffect } from 'react'

const Use_Effect = () => {

    const [data, setData] = useState(0)
    const [userData, setUserData] = useState("SkillQode")

    function handleClick() {
        setData(data + 1)
    }
    function handleClick2() {
        setUserData(" ")
    }

    useEffect(() => {
        console.log("Hello");
    })

    return (
        <div>
            <span className='btn me-4'>{data}</span>
            <button className='btn me-4' onClick={handleClick}>Click Me</button>
            <span className='btn me-4'>{userData}</span>
            <button className='btn' onClick={handleClick2}>Click Me</button>
        </div>
    )
}

export default Use_Effect
