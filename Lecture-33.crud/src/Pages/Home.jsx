import React from 'react'
import Navbar from '../Componets/Navbar'
import { FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='bg-slate-50 h-screen '>    
      <div className='container'>
      <Navbar />
      {/* <h1 className='text-3xl font-normal text-center'>User List</h1> */}

      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className='text-3xl text-center font-bold'>User List</h1>
          </div>
          <div className="flex w-full max-w-md rounded-md border-2 border-solid border-black items-center space-x-2">
            <input
              className="flex h-12 w-full rounded-md  bg-transparent px-3 py-2 text-1xl font-bold placeholder:text-gray-700  focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 outline-none"
              type="Search"
              placeholder="Search..."

              
              
            />
            
            <button
              type="button"
              className="rounded-md bg-black  px-5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <FaSearch />
            </button>
        
          </div>
          <div>
            <button
              type="button"
              className="rounded-md text-1xl bg-black px-4 py-3  font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
             <NavLink to="./User"> Add User</NavLink>
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-400 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-200">
                    <tr>
                      <th
                        className="px-4 py-3.5 text-left text-sm font-bold text-gray-700 md:px-12"
                      >
                        <span>User</span>
                      </th>
                      <th
                        className="px-4 py-3.5 text-left text-sm font-bold text-gray-700 md:px-12"
                      >
                        FirstName
                      </th>
                      <th
                        className="px-4 py-3.5 text-left text-sm font-bold text-gray-700 md:px-12"
                      >
                        LastName
                      </th>
                      <th
                        className="px-4 py-3.5 text-left text-sm font-bold text-gray-700 md:px-12"
                      >
                        Profession
                      </th>
                      <th
                        className="px-4 py-3.5 text-left text-sm font-bold text-gray-700 md:px-12"
                      >
                        Age
                      </th>
                      <th
                        className="px-4 py-3.5 text-left text-sm font-bold text-gray-700 md:px-12"
                      >
                        Mobile No.
                      </th>

                      <th className="px-4 py-3.5 md:px-12">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-400 bg-white">
                    <tr>
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              John Doe
                            </div>
                            <div className="text-sm text-gray-700">john@devui.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 md:px-12">
                        <div className="text-sm text-gray-900 "></div>
                        <div className="text-sm text-gray-700">john</div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 md:px-12">
                        <span className="text-sm text-gray-700">
                          Deo
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700 md:px-12">
                        Front-end Developer
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700 md:px-12">
                        20
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700 md:px-12">
                        9537023456
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                        <a href="#" className="bg-green-100 px-4 py-2 rounded-3xl me-4 md:me-10">
                          Edit
                        </a>
                        <a href="#" className="bg-green-100 px-4 py-2 rounded-3xl">
                          Delete
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Jane Doe
                            </div>
                            <div className="text-sm text-gray-700">jane@devui.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 md:px-12">
                        <div className="text-sm text-gray-900 ">Jane</div>

                      </td>
                      <td className="whitespace-nowrap px-4 py-4 md:px-12">
                        <span className="text-sm text-gray-700">
                          doe
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700 md:px-12">
                        CTO
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700 md:px-12">
                        21
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700 md:px-12">
                        9044357645
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                        <a href="#" className="bg-green-100 px-4 py-2 rounded-3xl me-4 md:me-10">
                          Edit
                        </a>
                        <a href="#" className="bg-green-100 px-4 py-2 rounded-3xl">
                          Delete
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>

  )
}

export default Home




