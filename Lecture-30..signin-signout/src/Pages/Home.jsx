import React from 'react'

const Home = () => {

    const logout = () => {
        localStorage.removeItem('signUp')
        window.location.reload()
    }

    const deleteAccount = () => {
        localStorage.clear()
        window.location.reload()
    }

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome {localStorage.getItem('name')}</p>
      <button onClick={logout} className=' btn bg-red-200'>Logout</button>
      
      <button onClick={deleteAccount} className='btn  bg-red-200'>Delete</button>
    </div>
  )
}

export default Home