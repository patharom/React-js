import React from 'react'
// import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Formik , Form , Field , ErrorMessage} from 'formik'


const initialValues = {
    firstname:'',
    lastname:'',
    email:'',
    password:''
}

const onSubmit = values => {
    console.log('for Data' , values);
}

// const validate = values => {
//     let error = {}
//         if(!values.firstname){
//             error.firstname = 'First Name is Required'
//         }

//         if(!values.lastname){
//             error.lastname = 'Last Name is Required'
//         }

//         if(!values.email){
//             error.email = 'Email is Required'
//         }else if(
//             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//             error.email = 'Invalid email address';
//           }

//         if(!values.password){
//             error.password = 'Password  is Required'
//         }
//         return error
//}

const validationSchema = Yup.object({
    firstname: Yup.string().required('Required'),
    lastname: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required(' Required')
})

const Login4 = () => {

    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     validationSchema
    // })

    // console.log('formik data' , formik.values);
    // console.log('form error' , formik.errors);

  return (
    <div>
        <h1 className='text-2xl font-bold'>Login Page 4</h1>
        <div className='h-screen flex justify-center items-center bg-purple-400'>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>

            <Form className='bg-purple-500 p-4'>
                <div>
                    <label htmlFor='firstname'>FirstName</label><br />
                    <Field type="text" name='firstname' id='firstname' /><br />
                   <ErrorMessage name='firstname'></ErrorMessage>
                </div>
                <div>
                    <label htmlFor='lastname'>LastName</label><br />
                    <Field type="text" name='lastname' id='lastname'/><br />
                    <ErrorMessage name='lastname'></ErrorMessage>
                </div>
                <div>
                    <label htmlFor='email'>Email</label><br />
                    <Field type="email" name='email' id='email'/><br />
                   <ErrorMessage name='email'></ErrorMessage>
                </div>
                <div>
                    <label htmlFor='password'>Password</label><br />
                    <Field type="password" name='password' id='password' /><br />
                    <ErrorMessage name='password'></ErrorMessage>
                </div>

                <button type='submit' className='bg-red-400 p-3 border-2 border-black text-white font-bold'>Submit</button>
            </Form>
            </Formik>
        </div>
    </div>
  )
}

export default Login4


