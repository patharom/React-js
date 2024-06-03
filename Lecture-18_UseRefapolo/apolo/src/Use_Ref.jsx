
import React from 'react'
import { useRef, useState } from 'react'


/* useRef Hook In React */

/* DOM Manupilation */

const Use_Ref = () => {

    const [name, setName] = useState('vivek')

    const refElement = useRef('')
    const NewRefElement = useRef('')

    console.log(refElement);

    function ResetName() {
        setName('')
        refElement.current.focus()
    }

    function ApplyBgColor(){
        NewRefElement.current.style.backgroundColor = "orange"
    }

    return (
        <div>
            <div className='flex justify-center'>
                <div>
                    <div ref={NewRefElement} className='h-96 w-96'></div>
                    <input ref={refElement} className='border-2 border-solid p-3' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <button className='btn' onClick={ResetName}>Reset</button>
                    <button className='btn' onClick={ApplyBgColor}>Click Me</button>
                </div>
            </div>
        </div>
    )
}

export default Use_Ref
