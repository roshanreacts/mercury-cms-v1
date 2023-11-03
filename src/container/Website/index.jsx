"use client"
import { useSearchParams } from 'next/navigation';
import React from 'react'
import WebsiteForm from '~/components/WebsiteForm';
import * as Yup from "yup";

let edit=false;
const Website = () => {
    edit = useSearchParams().get('edit') === 'true' ? true : false;


    const initialValues = {
        websiteSlug: "",
        websiteName: "",
        websiteDescription: "",
        domain: "",
        status: "draft",
        Pages:"One"
    };

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
        <>
            <WebsiteForm initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} add={false} edit={edit}/>
        </>
    )
}

export default Website
