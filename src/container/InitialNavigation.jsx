"use client"
import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import { redirect, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import store from '~/store';
import { checkTokenExpiry, clearTokenCookie, getLoggedInUserIdFromCookie } from '~/utilis/cookie';
import { GET_ALL_WEBSITES, GET_SINGLE_USER } from '~/utilis/queries';
import { useLazyQuery } from './hooks';

const InitialNavigation = ({ logoPresent, fromLayout = false }) => {
    const [getLoggedUser, userResponse] = useLazyQuery(store.getLoggedInUser);
    const [getWebsites, websiteResponse] = useLazyQuery(store.getAllWebsites);
    const router = useRouter();

    useEffect(() => {
        checkSession()
        const idFromCookie = getLoggedInUserIdFromCookie();
        getLoggedUser(GET_SINGLE_USER, {
            where: {
                id: {
                    is: idFromCookie
                }
            }
        }, { cache: "no-store" })
    }, [])

    useEffect(() => {
        if (userResponse.data) {
            const userId = store.loggedInUser?.id;
            getWebsites(GET_ALL_WEBSITES, {
                where: {
                    author: {
                        is: userId
                    }
                }
            }, { cache: "no-store" });
        }
    }, [userResponse.data, userResponse.error, userResponse.loading])


    useEffect(() => {
        checkSession()
        if (websiteResponse.data || websiteResponse.error) {
            const websiteId = store.websites[0]?.id;
            if (!fromLayout)
                if (websiteId)
                    router.replace(`/admin/${websiteId}`);
                else
                    router.replace('/admin/addwebsite');
        }
    }, [websiteResponse.data, websiteResponse.error])


    const checkSession = () => {
        const expired = checkTokenExpiry()
        if (expired) {
            redirect('/login');
        }
    }


    return (
        <>
            {
                logoPresent &&
                <div className='h-[100vh] flex justify-center items-center'>
                    <Image
                        className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert animate-pulse animate-infinite animate-ease-in-out"
                        src="/mercury-logo.png"
                        alt="Next.js Logo"
                        width={180}
                        height={37}
                        priority
                    />
                </div>
            }
        </>

    )
}

export default observer(InitialNavigation)
