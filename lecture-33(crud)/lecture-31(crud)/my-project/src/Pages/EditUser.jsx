import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const EditUser = () => {
  const navigate = useNavigate()

  const { id } = useParams()

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    age: '',
    profession: '',
    number: ''
  })

  const loadUserWithId = async () => {
    const res = await axios.get(`http://localhost:3000/User/${id}`)
    setUser(res.user)
  }

  const onSubmitEditUser = async () => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/User/${id}`, user)
    navigate('/')
  }

  useEffect(() => {
    loadUserWithId();
  })


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" onSubmit={onSubmitEditUser}>
        <h1 className="text-2xl font-bold mb-4 text-center">Edit User</h1>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            value={user.firstname}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setuser({ ...user, firstname: e.target.value })}
          />

        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            value={user.lastname}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setUser({ ...user, lastname: e.target.value })}
          />

        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            id="age"
            value={user.age}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setUser({ ...user, age: e.target.value })}
          />

        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profession">
            Profession
          </label>
          <input
            type="text"
            id="profession"
            value={user.profession}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setUser({ ...user, profession: e.target.value })}
          />

        </div>



        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"
            value={user.number}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setUser({ ...user, number: e.target.value })}
          />

        </div>

        <button
          type="submit"
          className=" bg-gray-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Edit User
        </button>

        <Link to='/'>
          <button
            type="submit"
            className=" bg-gray-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4"
          >
            back To Home
          </button>
        </Link>


      </form>
    </div>
  );
};

export default EditUser;
