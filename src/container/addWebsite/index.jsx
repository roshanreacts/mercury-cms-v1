"use client"
import React, { useEffect } from "react";
import WebsiteForm from "~/components/WebsiteForm";
import * as Yup from "yup";
import { useLazyQuery } from "../hooks";
import store from "~/store";
import { CREATE_WEBSITE } from "~/utilis/queries";
import { getLoggedInUserIdFromCookie } from "~/utilis/cookie";
import {
  ToastErrorMessage,
  ToastSuccessMessage,
} from "~/components/ToastMessage";
import { ToastContainer } from "react-toastify";

const AddWebsite = () => {
  const [addWebsite, addWebsiteResponse] = useLazyQuery(store.addWebsite);
  const userId = getLoggedInUserIdFromCookie();
  const initialValues = {
    websiteSlug: "",
    websiteName: "",
    websiteDescription: "",
    domain: "",
    status: "Draft"
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
    addWebsite(CREATE_WEBSITE, {
      data: {
        "author": userId,
        "description": values.websiteDescription,
        "domain": values.domain,
        "name": values.websiteName,
        "slug": values.websiteSlug,
        "status": values.status
      }
    },
      {
        cache: "no-store"
      })
  };

  useEffect(()=>{
    if(addWebsiteResponse.data){
      ToastSuccessMessage("Website Added Successfully")
      
    }
    if(addWebsiteResponse.error){
      ToastErrorMessage(addWebsiteResponse.error.message)
    }
  }, [addWebsiteResponse.data, addWebsiteResponse.error, addWebsiteResponse.loading])

  return (
    <>
    <ToastContainer/>
      <WebsiteForm initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} add={true} edit={true} loading={addWebsiteResponse.loading}/>
    </>
  )
};

export default AddWebsite;


