import React from 'react'
import { useFormik } from 'formik'


const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
}

const onSubmit = values => {
    console.log('form Data', values);
}


const validate = values =>{
    let error = {}
    if(!values.firstname){
        error.firstname = 'Required'
    }
    if(!values.lastname){
        error.lastname = 'Required'
    }
    if(!values.email){
        error.email = 'Required'
    
    }

    else if(
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    )
    {
        error.email = 'Invalid email address';
      }
    if(!values.password){
        error.password = 'Required'
    }

    return error
}
const Login = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    console.log('formik data', formik.values);
    console.log('form error', formik.errors);

    return (
        <div>

            <h1>Login Page</h1>
            <div className='h-screen flex justify-center items-center bg-gray-400'>


                <form  className="bg-blue-300 w-64 h-96 p-5 " action="" onSubmit={formik.handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="firstname">Firstname</label><br />
                        <input className='border-2 border-black' type="text" name="firstname" id="firstname" value={formik.values.firstname} onChange={formik.handleChange} />
                        {
                            formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null
                        }
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="lastname">Lastname</label><br />
                        <input  className='border-2 border-black' type="text" name="lastname" id="lastname" value={formik.values.lastname} onChange={formik.handleChange} />
                        {
                            formik.errors.lastname ? <div>{formik.errors.firstname}</div> : null
                        }
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="email">E-mail</label><br />
                        <input  className='border-2 border-black' type="email" name="email" id="email" value={formik.values.emailname} onChange={formik.handleChange} />
                        {
                            formik.errors.email ? <div>{formik.errors.firstname}</div> : null
                        }
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password">password</label><br />
                        <input   className='border-2 border-black'type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} />
                        {
                            formik.errors.password ? <div>{formik.errors.firstname}</div> : null
                        }
                    </div>
                    <button type='submit' className='bg-black text-white h-10 w-20'>Submit</button>
                </form>
            </div>
        </div>
    )
}
                                                    
export default Login