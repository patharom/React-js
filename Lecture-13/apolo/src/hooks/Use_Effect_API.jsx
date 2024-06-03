
import React from 'react'
import { useState , useEffect } from 'react'

const Use_Effect_API = () => {
    
    const [userList , setUserList] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapiserver.reactbd.com/walmart')
        .then((res) => res.json())
        .then((json) => setUserList(json))
    } , [])

  return (
    <div>
      <table>
        <tr>
            {
                userList.map((item) => (
                    <>
                        <div>{item.title}</div>
                    </>
                ))
            }
        </tr>
      </table>
    </div>
  )
}

export default Use_Effect_API


/* Task:- Display 20 Product With Img in Card View using useEffect Hook */
/* Task:- Display To-Do List With useEffect Hooks */
