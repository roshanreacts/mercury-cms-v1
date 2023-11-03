"use client"
import React, { useEffect, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation'
import store from '~/store';
import { observer } from "mobx-react-lite";
import {clearTokenCookie, setTokenCookie } from '~/utilis/cookie';
import { useLazyQuery } from '../hooks';
import { LOGIN_USER } from '~/utilis/queries';
import Loader from '../Loader';



const LoginContainer = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loginUser, { data, loading, error }] = useLazyQuery(store.login);
    const router = useRouter();

    useEffect(() => {
        if (data) {
            setTokenCookie()
            router.replace('/admin');
        }

        if (error) {
            console.log("login error", error)
        }
    }, [data, error])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().
                required('Required')
        }),
        onSubmit: (values) => {
            loginUser(LOGIN_USER, values, { cache: "no-store" });
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
                            <button disabled={loading} className="w-full p-2 bg-gray-900 text-white rounded flex justify-center items-center" type="submit">
                                {!loading ? "Login" : <Loader type="info" size="small"/>}
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

export default observer(LoginContainer);
