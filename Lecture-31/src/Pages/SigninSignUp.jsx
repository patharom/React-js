import React from 'react'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Home from './Home'

const SignInSignUp = () => {
  const [showHome, setShowHome] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)
  const localSignup = localStorage.getItem('signUp')
  const localEmail = localStorage.getItem('email')
  const localPassword = localStorage.getItem('password')
  const localName = localStorage.getItem('name')

  useEffect(() => {
    if (localSignup) {
      setShowHome(true)
    }
    if (localEmail) {
      setShowSignIn(true)
    }
  }, [localSignup, localEmail])

  const signUpFormik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
    }),
    onSubmit: values => {
      localStorage.setItem('name', values.name)
      localStorage.setItem('email', values.email)
      localStorage.setItem('password', values.password)
      localStorage.setItem('signUp', values.email)
      alert('Account Successfully Created!')
      window.location.reload()
    }
  })

  const signInFormik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required')
    }),
    onSubmit: values => {
      if (values.email === localEmail && values.password === localPassword) {
        localStorage.setItem('signUp', values.email)
        window.location.reload()
      } else {
        alert('Please enter valid credentials')
      }
    }
  })

  return (
    <div>
      {showHome ? <Home /> :
        (showSignIn ?
          <div className='flex h-screen bg-red-500 justify-center items-center'>
            <div className='bg-purple-500 p-12 border-4 border-solid border-black'>
              <h1 className='font-bold text-center text-lg'>Hello {localName}</h1>
              <form onSubmit={signInFormik.handleSubmit}>
                <div className='mt-4'>
                  <input
                    className='p-2 rounded-2xl'
                    type='email'
                    placeholder='Email'
                    name='email'
                    onChange={signInFormik.handleChange}
                    onBlur={signInFormik.handleBlur}
                    value={signInFormik.values.email}
                  />
                  {signInFormik.touched.email && signInFormik.errors.email ? (
                    <div className='text-red-600'>{signInFormik.errors.email}</div>
                  ) : null}
                </div>
                <div className='mt-4'>
                  <input
                    className='p-2 rounded-2xl'
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={signInFormik.handleChange}
                    onBlur={signInFormik.handleBlur}
                    value={signInFormik.values.password}
                  />
                  {signInFormik.touched.password && signInFormik.errors.password ? (
                    <div className='text-red-600'>{signInFormik.errors.password}</div>
                  ) : null}
                </div>
                <button className='bg-orange-400 ring-amber-300 w-full mt-4 h-12 rounded-2xl hover:text-white font-bold hover:border-2 hover:border-solid hover:border-black' type='submit'>Sign In</button>
              </form>
            </div>
          </div>
          :
          <div className='flex h-screen bg-red-500 justify-center items-center'>
            <div className='bg-gray-100 p-12 border-4 border-solid border-black'>
              <h1 className='font-bold text-center text-lg'>**Sign Up**</h1>
              <form onSubmit={signUpFormik.handleSubmit}>
                <div className='mt-4'>
                  <input
                    className='p-2 hover:bg-red-50 rounded border-2 border-indigo-600'
                    type='text'
                    placeholder='Name'
                    name='name'
                    onChange={signUpFormik.handleChange}
                    onBlur={signUpFormik.handleBlur}
                    value={signUpFormik.values.name}
                  />
                  {signUpFormik.touched.name && signUpFormik.errors.name ? (
                    <div className='text-red-600'>{signUpFormik.errors.name}</div>
                  ) : null}
                </div>
                <div className='mt-4'>
                  <input
                    className='p-2 hover:bg-red-50 rounded border-2 border-indigo-600'
                    type='email'
                    placeholder='Email'
                    name='email'
                    onChange={signUpFormik.handleChange}
                    onBlur={signUpFormik.handleBlur}
                    value={signUpFormik.values.email}
                  />
                  {signUpFormik.touched.email && signUpFormik.errors.email ? (
                    <div className='text-red-600'>{signUpFormik.errors.email}</div>
                  ) : null}
                </div>
                <div className='mt-4'>
                  <input
                    className='p-2 hover:bg-red-50 rounded border-2 border-indigo-600'
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={signUpFormik.handleChange}
                    onBlur={signUpFormik.handleBlur}
                    value={signUpFormik.values.password}
                  />
                  {signUpFormik.touched.password && signUpFormik.errors.password ? (
                    <div className='text-red-600'>{signUpFormik.errors.password}</div>
                  ) : null}
                </div>
                <button className='bg-purple-500 ring-amber-300 w-full mt-4 h-12 rounded-2xl hover:text-white font-bold hover:border-2 hover:border-solid hover:border-black' type='submit'>Sign Up</button>
              </form>
            </div>
          </div>
        )}
    </div>
  )
}

export default SignInSignUp
