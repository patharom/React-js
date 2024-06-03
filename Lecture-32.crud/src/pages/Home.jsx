
import React, { useState } from "react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      {/* <h1 className="text-3xl font-normal text-center">This is Home Page</h1> */}
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-semibold">User List</h2>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 shadow-sm focus:border-gray-500 focus:outline-none"
            />
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add user
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
                        className="px-4 py-3.5 text-left text-sm font-bold text-gray-700"
                      >
                        <span>User</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-bold text-gray-700"
                      >
                        FirstName
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-bold text-gray-700"
                      >
                        LastName
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-bold text-gray-700"
                      >
                        Profession
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-bold text-gray-700"
                      >
                        Age
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-bold text-gray-700"
                      >
                        Mobile No.
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
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
                            <div className="text-sm text-gray-700">
                              john@devui.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-12 py-4">
                        <div className="text-sm text-gray-700">John </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="text-sm text-gray-700">Doe </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                        Front-end Developer
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                        25
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                        1234567891
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-gray-700 bg-green-500 px-[20px] py-[8px] rounded-3xl me-[10px]"
                        >
                          Edit
                        </a>
                        <a
                          href="#"
                          className="text-gray-700 bg-red-500 px-[20px] py-[8px] rounded-3xl"
                        >
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
                            <div className="text-sm text-gray-700">
                              jane@devui.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-12 py-4">
                        <div className="text-sm text-gray-700">Jane </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="text-sm text-gray-700">Doe </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                        CTO
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                        20
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                        4865792135
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-gray-700 bg-green-500 px-[20px] py-[8px] rounded-3xl me-[10px]">
                          Edit

                  </a>
                        <a
                          href="#"
                          className="text-gray-700 bg-red-500 px-[20px] py-[8px] rounded-3xl">
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
  );
};

export default Home;
