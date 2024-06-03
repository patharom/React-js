import React from 'react'
import { UseAuth } from './Auth'
import { Navigate } from 'react-router-dom'

const ReqireAuth = ({children}) => {

    const auth = UseAuth()

    if(!auth.user){
        return <Navigate to="/login"></Navigate>
    }

  return (
    children
  )
}

export default ReqireAuth