
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import { useEffect , useState } from "react";
import axios from "axios";

export default function Home() {

  const user = [
    {
      name: 'John Doe',
      title: 'Front-end Developer',
      department: 'Engineering',
      email: 'john@devui.com',
      role: 'Developer',
      image:
        'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },
    {
      name: 'Jane Doe',
      title: 'Back-end Developer',
      department: 'Engineering',
      email: 'jane@devui.com',
      role: 'CTO',
      image:
        'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    },
  ]

  const [data , setData] = useState([])


  const loadUser = async() => {
    const res = await axios.get('http://localhost:3001/User')
    console.log(res.data , "userRes");
    setData(res.data)
  }

  useEffect(() => {
    loadUser()
  } , [])


  const onDelete = (id) => {
    axios.delete('http://localhost:3001/User')
    .then((response) => {
      loadUser()
    })
    .catch((error) => {
      console.log(error , "error user data");
    })
  }

  return (
    <>
      <Navbar />
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className="text-lg font-semibold">USER DETAILS TABLE</h1>
          </div>
          <div>
            <input
              className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Serach User"
            ></input>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <Link to="/add">ADD USER</Link>
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Image</span>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>First Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-center text-sm font-normal text-gray-700"
                      >
                        Last Name
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-sm font-normal text-gray-700"
                      >
                        Age
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-sm font-normal text-gray-700"
                      >
                        Proffesion
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-right text-sm font-normal text-gray-700"
                      >
                        Mobile No
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {
                    data.map((value) => (
                      <tr key={value.id}>
                        <td>
                          <div className="h-10 w-10 flex-shrink-0">
                            {value.image !== null ?
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={value.image}
                                alt=""
                              /> :
                              <p className='rounded-full bg-black px-3 py-2 text-sm font-semibold text-white'>{value.firstname.charAt(0)}</p>
                            }
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">

                            <div className="ml-4">
                              <div className="text-sm  text-gray-900">{value.username}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{value.username}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {value.age}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {value.profession}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {value.phone}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <Link to='/edit'><button><a href="#" className="text-gray-700">
                            Edit
                          </a></button>
                          </Link>
                          <button onClick={() => onDelete(value.id)} className="ml-4">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
