
import React from 'react'
import { useState } from 'react'

const initialState = 10
const Use_State = () => {

    const [Age, setAge] = useState(initialState)

    function incrementAge() {
        setAge(Age  +  4)
        // setAge(Age => Age +  2)
    }


    return (
        <div>
            <div className='btn w-52 mt-2'>{Age}</div>
            <button className='btn mt-2' onClick={incrementAge}>Add Age</button>
        </div>
    )
}

export default Use_State
