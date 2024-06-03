import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const User = () => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      profession: '',
      age: '',
      mobile: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required('First Name is required'),
      lastname: Yup.string().required('Last Name is required'),
      profession: Yup.string().required('Profession is required'),
      age: Yup.number().required('Age is required').positive('Age must be positive').integer('Age must be an integer'),
      mobile: Yup.string()
        .required('Mobile Number is required')
        .matches(/^[0-9]+$/, 'Mobile Number must be only digits')
        .min(10, 'Mobile Number must be at least 10 digits')
        .max(15, 'Mobile Number must be at most 15 digits'),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Here you can handle form submission, e.g., sending data to an API
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" onSubmit={formik.handleSubmit}>
        <h1 className="text-2xl font-bold mb-4 text-center">Add User</h1>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...formik.getFieldProps('firstname')}
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <div className="text-red-500 text-sm">{formik.errors.firstname}</div>
          ) : null}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...formik.getFieldProps('lastname')}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <div className="text-red-500 text-sm">{formik.errors.lastname}</div>
          ) : null}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profession">
            Profession
          </label>
          <input
            type="text"
            id="profession"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...formik.getFieldProps('profession')}
          />
          {formik.touched.profession && formik.errors.profession ? (
            <div className="text-red-500 text-sm">{formik.errors.profession}</div>
          ) : null}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            id="age"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...formik.getFieldProps('age')}
          />
          {formik.touched.age && formik.errors.age ? (
            <div className="text-red-500 text-sm">{formik.errors.age}</div>
          ) : null}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"

className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...formik.getFieldProps('mobile')}
          />
          {formik.touched.mobile && formik.errors.mobile ? (
            <div className="text-red-500 text-sm">{formik.errors.mobile}</div>
          ) : null}
        </div>
        
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default User;