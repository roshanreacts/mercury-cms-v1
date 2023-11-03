"use client"
import { useParams, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import WebsiteForm from '~/components/WebsiteForm';
import * as Yup from "yup";
import { useLazyQuery } from '../hooks';
import store from '~/store';
import { GET_ALL_WEBSITES, GET_WEB_SITE } from '~/utilis/queries';
import { observer } from 'mobx-react-lite';
import { getLoggedInUserIdFromCookie } from '~/utilis/cookie';
import Image from 'next/image';

let edit = false;
const WebsiteViewUpdate = () => {
    edit = useSearchParams().get('edit') === 'true' ? true : false;
    const [initialValues, setInitialValues] = useState({
        websiteSlug: "",
        websiteName: "",
        websiteDescription: "",
        domain: "",
        status: "draft",
    })
    const currentWebsite = useParams().websiteId;

    const [getWebsites, websitesResponse] = useLazyQuery(store.getAllWebsites);
    const [getSingleWebsite, singleWebsiteResponse] = useLazyQuery(store.getWebsiteWithId)

    useEffect(() => {
        if (store.websites.length === 0) {
            const userId = getLoggedInUserIdFromCookie()
            getWebsites(GET_ALL_WEBSITES, {
                where: {
                    author: {
                        is: userId
                    }
                }
            },
                {
                    cache: "no-store"
                }
            )
        }
        else {
            websitesResponse.data = true;
        }
    }, [])

    useEffect(() => {
        if (websitesResponse.data) {
            getSingleWebsite(GET_WEB_SITE, {
                where: {
                    id: {
                        is: currentWebsite
                    }
                }
            },
                {
                    cache: "no-store"
                },
                currentWebsite
            )
        }
    }, [websitesResponse.data, websitesResponse.error])

    useEffect(() => {
        if (singleWebsiteResponse.data) {
            console.log(store.websites, "final data");

            const webData = store.websites.filter((web) => web.id === currentWebsite)[0];

            setInitialValues({
                websiteSlug: webData?.slug,
                websiteName: webData?.name,
                websiteDescription: webData?.description,
                domain: webData?.domain,
                status: webData?.status,
            });
        }

    }, [singleWebsiteResponse.data, singleWebsiteResponse.error])

    useEffect(() => {
        console.log(initialValues);
    }, [initialValues])


    const validationSchema = Yup.object({
        websiteSlug: Yup.string()
            .required("Website Slug Required")
            .matches(/^[^\s]+$/, "Should not contain spaces"),
        websiteName: Yup.string().required("Website Name Required"),
        websiteDescription: Yup.string().required("Website Description Required"),
        domain: Yup.string().required("Domain Required"),
    });

    const onSubmit = (values) => {
        console.log(values);
    };
    return (
        <div>
            {initialValues.websiteName ?
                <WebsiteForm initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} add={false} edit={edit} />
                :
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
        </div>
    )
}

export default observer(WebsiteViewUpdate)
