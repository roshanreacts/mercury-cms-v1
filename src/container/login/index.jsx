"use client"
import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import client from '../../utilis/appoloClient'
import { useMutation } from '@apollo/client';
import { gql } from "graphql-tag";
import { useRouter } from 'next/navigation'
import { makeGraphqlQuery } from '~/app/actions';




const LOGIN_USER = `
query AllPages {
    allPages {
      docs {
        id
        slug
      }
    }
  }
`;

const LoginContainer = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const router = useRouter();


    const loginAdmin = async(data) => {
        console.log(data);
        // if (data)
            // router.push('/admin');
        const response = await makeGraphqlQuery(LOGIN_USER);
        console.log(response);
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().
                min(6, "Minimum 6 digits are required.").
                matches(
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                    'Password must meet the requirements'
                ).
                required('Required')
        }),
        onSubmit: (values) => {
            loginAdmin(values);
        },
    });

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };




    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col items-center justify-center bg-gray-200 h-[90vh]">


                    <div className="flex flex-col items-center justify-center p-8 rounded-lg border-2 border-gray-900 min-w-[35%] bg-white" style={{ boxShadow: "8px 12px 32px 0px rgba(0,0,0,0.1)" }}>
                        <h1 className="text-2xl font-bold">Mercury CMS Admin Login</h1>
                        <div className="mt-4 w-[60%]">
                            <input
                                className="w-full p-2 border rounded border-gray-300"
                                type="email"
                                placeholder="Email"
                                maxLength="50"
                                name='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                required
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className='text-red-700 text-sm'>{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className="mt-4 w-[60%]">
                            <div className="relative">
                                <input
                                    className="w-full p-2 border rounded border-gray-300"
                                    type={passwordVisible ? 'text' : 'password'}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    placeholder="Password"
                                    name="password"
                                    required
                                />
                                <span className="absolute right-4 top-3 cursor-pointer" onClick={togglePasswordVisibility}>
                                    {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </span>
                                {formik.touched.password && formik.errors.password ? (
                                    <div className='text-red-700 text-sm'>{formik.errors.password}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="mt-6 w-[30%]">
                            <button className="w-full p-2 bg-gray-900 text-white rounded" type="submit">
                                Login
                            </button>
                        </div>


                        <div className="mt-4">
                            <Link href="/forgotpassword" className="text-blue-700 text-sm">Forgot Password?</Link>
                        </div>
                    </div>

                </div>
            </form>


        </>
    );
}

export default LoginContainer;
