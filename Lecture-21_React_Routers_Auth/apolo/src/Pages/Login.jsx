import React from 'react'
import { useState } from 'react'
import { UseAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [user , setUser] = useState('')
    const auth = UseAuth()
    const navigate = useNavigate()

    const handleLogin = () =>{
        auth.login(user)
        navigate('/profile')
    }

  return (
    <div>
        <label htmlFor="userName">UserName</label>
        <input type="text" onChange={(e) => setUser(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login