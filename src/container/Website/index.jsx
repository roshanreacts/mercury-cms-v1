"use client"
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import WebsiteForm from '~/components/WebsiteForm';
import * as Yup from "yup";
import { useLazyQuery } from '../hooks';
import store from '~/store';
import { DELETE_WEBSITE, GET_ALL_WEBSITES, GET_WEB_SITE, UPDATE_WEBSITE } from '~/utilis/queries';
import { observer } from 'mobx-react-lite';
import { getLoggedInUserIdFromCookie } from '~/utilis/cookie';
import Image from 'next/image';
import { ToastDangerMessage, ToastErrorMessage, ToastSuccessMessage } from '~/components/ToastMessage';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

let edit = false;
const WebsiteViewUpdate = () => {
    const router = useRouter()
    edit = useSearchParams().get('edit') === 'true' ? true : false;
    const [initialValues, setInitialValues] = useState({
        websiteSlug: "",
        websiteName: "",
        websiteDescription: "",
        domain: "",
        status: "Draft",
    })
    const currentWebsite = useParams().websiteId;
    const userId = getLoggedInUserIdFromCookie()
    const [getWebsites, websitesResponse] = useLazyQuery(store.getAllWebsites);
    const [getSingleWebsite, singleWebsiteResponse] = useLazyQuery(store.getWebsiteWithId)
    const [updateWebsite, updateWebsiteResponse] = useLazyQuery(store.updateWebsiteById)
    const [deleteWebsite, deleteWebsiteResponse] = useLazyQuery(store.deleteWebsite)
    const [timeStamp, setTimeStamp] = useState({});


    useEffect(() => {
        if (store.websites.length === 0) {

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

            const webData = store.websites.filter((web) => web.id === currentWebsite)[0];
            setTimeStamp({
                createdOn: webData.createdOn,
                updatedOn: webData.updatedOn,
              });
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
    }, [initialValues])


    const validationSchema = Yup.object({
        websiteSlug: Yup.string()
            .required("Website Slug Required")
            .matches(/^[^\s]+$/, "Should not contain spaces"),
        websiteName: Yup.string().required("Website Name Required"),
        websiteDescription: Yup.string().required("Website Description Required"),
        domain: Yup.string().required("Domain Required"),
    });


    useEffect(() => {
        if (updateWebsiteResponse.data) {
            ToastSuccessMessage("Updated Website!!")
            window.location.href = `${currentWebsite}`
        }
        if (updateWebsiteResponse.error) {
            ToastErrorMessage(updateWebsiteResponse.error.message)
        }
    }, [updateWebsiteResponse.data, updateWebsiteResponse.error, updateWebsiteResponse.loading])

    const onSubmit = (values) => {
        updateWebsite(UPDATE_WEBSITE, {
            data: {
                name: values.websiteName,
                slug: values.websiteSlug,
                domain: values.domain,
                description: values.websiteDescription,
                status: values.status,
                author: userId
            },
            updateWebsiteId: currentWebsite
        }, {
            cache: "no-store"
        }, currentWebsite)
    };

    useEffect(() => {
        if (deleteWebsiteResponse.data) {
            ToastSuccessMessage("Deleted Website!!")
            router.replace(`/admin`);
        }
        if (deleteWebsiteResponse.error) {
            ToastErrorMessage(deleteWebsiteResponse.error.message)
        }
    }, [deleteWebsiteResponse.data, deleteWebsiteResponse.error, deleteWebsiteResponse.loading])


    const handleDelete = () => {
        console.log("Website Deleted");
        ToastDangerMessage("Website Deleted")
        // deleteWebsite(DELETE_WEBSITE,
        //     {
        //         deleteWebsiteId: currentWebsite
        //     },
        //     {
        //         cache: "no-store"
        //     },
        //     currentWebsite
        // )
    }

    return (
        <div>
            <ToastContainer />
            {initialValues.websiteName ?
                <WebsiteForm
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    add={false}
                    edit={edit}
                    loading={updateWebsiteResponse.loading}
                    handleDelete={handleDelete}
                    timeStamp={timeStamp}
                />
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
