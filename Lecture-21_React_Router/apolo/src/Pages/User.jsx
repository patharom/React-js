
import React from 'react'
import { useSearchParams, Outlet } from 'react-router-dom'

const User = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const ActiveUser = searchParams.get('filter') === 'active'

    return (
        <>
            <div>
                <div>User 1 </div>
                <div>User 2 </div>
                <div>User 3 </div>
                <Outlet/>
            </div>
            <div>
                <button onClick={() => setSearchParams({filter:'active'})}>Active Users</button>
                <button onClick={() => setSearchParams({})}>All Users</button>
            </div>
            {
                ActiveUser ? <h1>Active User Only</h1> : <h1>All Users</h1>
            }
        </>

    )
}

export default User
