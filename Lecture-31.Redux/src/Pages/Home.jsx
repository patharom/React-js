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
    <div className='flex h-screen bg-red-500 justify-center items-center'>
      <div className='bg-blue-400 p-12 border-4 border-solid border-black'>
        <h1 className='font-bold text-center text-3xl mb-4'>Home Page</h1>
        <p className='text-center mb-8'>Welcome {localStorage.getItem('name')}</p>
        <div className='flex flex-col items-center'>
          <button 
            onClick={logout} 
            className='bg-green-200 ring-amber-300 w-full mt-4 h-12 rounded-2xl hover:text-white font-bold hover:border-2 hover:border-solid hover:border-black mb-4'
          >
            Logout
          </button>
          <button 
            onClick={deleteAccount} 
            className='bg-green-200 ring-amber-300 w-full mt-4 h-12 rounded-2xl hover:text-white font-bold hover:border-2 hover:border-solid hover:border-black'
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home;
