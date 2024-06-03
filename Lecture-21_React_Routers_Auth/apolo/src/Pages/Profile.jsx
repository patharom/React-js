import React from 'react'
import { UseAuth } from './Auth'
import { useNavigate } from 'react-router-dom'


const Profile = () => {

    const auth = UseAuth()

    const navigate = useNavigate()

    const handleLogout = () =>{
        auth.logout()
        navigate('/')
    }

  return (
    <div>
        <span> WelCome To Emart Mr/Mrs {auth.user}</span><br></br>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile