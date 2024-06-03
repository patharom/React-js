
import { ArrowLeft } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



export default function Edit() {

  const navigate  = useNavigate()

  const [user , setUser]  = useState({
      firstname:'',
      lastname:'',
      age:'',
      profession:'',
      number:''
  })

  const loadUserWithId = async() => {
    const res = await axios.get('http://localhost:3001/User')
    setUser(res.user)
  }

  const onSubmitEditUser = async() => {
    e.preventDefault();
    await axios.put('http://localhost:3001/User' , user)
    navigate('/')
  }

  useEffect(() => {
    loadUserWithId();
  })



  return (
    <section className="rounded-md bg-black/80 p-2">
      <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">

          <h2 className="text-2xl font-bold leading-tight text-black">EDIT USER</h2>

          <form action="#" method="POST" className="mt-8" onSubmit={onSubmitEditUser}>
            <div className="space-y-5">
              <div>
                <label htmlFor="firstname" className="text-base font-medium text-gray-900">
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="First Name"
                    id="firstname"
                    name='firstname'
                    onChange={(e) => setUser({...user , firstname:e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastname" className="text-base font-medium text-gray-900">
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Last Name"
                    id="lastname"
                    name='lastname'
                    onChange={(e) => setUser({...user , lastname:e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="age" className="text-base font-medium text-gray-900">
                  Age
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    placeholder="Age"
                    id="age"
                    name='age'
                    onChange={(e) => setUser({...user , age:e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="city" className="text-base font-medium text-gray-900">
                  Proffesion
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Proffesion"
                    id="city"
                    name='city'
                    onChange={(e) => setUser({...user , profession:e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="age" className="text-base font-medium text-gray-900">
                  Mobile No
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    placeholder="Mobile No"
                    id="Mnumber"
                    name='Mnumber'
                    onChange={(e) => setUser({...user , number:e.target.value})}
                  />
                </div>
              </div>
              <div className='flex justify-between'>
                <Link to="/">
                  <button
                    type="submit"
                    className="inline-flex w-fit-content items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    <ArrowLeft className="me-2" size={16} /> GO BACK 
                  </button>
                </Link>
                <button
                  type="submit"
                  className="inline-flex w-fit-content items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Edit User <ArrowRight className="ml-2" size={16} />
                </button>

              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
