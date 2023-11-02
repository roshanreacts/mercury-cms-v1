"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import store from '~/store';
import { getLoggedInUserIdFromCookie } from '~/utilis/cookie';
import { GET_ALL_WEBSITES, GET_SINGLE_USER } from '~/utilis/queries';

const InitialNavigation = () => {
    const router = useRouter();


    useEffect(() => {
        const idFromCookie = getLoggedInUserIdFromCookie();

        (async () => {
            await store.getLoggedInUser(GET_SINGLE_USER, {
                where: {
                    id: {
                        is: idFromCookie
                    }
                }
            }, {
                cache: "no-store"
            })
            const userId = store.loggedInUser?.id;

            await store.getAllWebsites(GET_ALL_WEBSITES, {
                where: {
                    author: {
                        is: userId
                    }
                }
            }, {
                cache: "no-store"
            });

            console.log(store.websites[0], "vbhn");
            const websiteId = store.websites[0]?.id;
            if (websiteId)
                router.push(`/admin/${websiteId}`);
            else
                router.push('/admin/addwebsite');
        })()



    }, [])
    return (
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
    )
}

export default InitialNavigation
