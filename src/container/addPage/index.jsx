"use client";
import { redirect, useParams } from "next/navigation";
import React, { useEffect } from "react";
import * as Yup from 'yup';
import PageForm from "~/components/PageForm";
import store from "~/store";
import { CREATE_PAGE } from "~/utilis/queries";
import { useLazyQuery } from "../hooks";
import { getLoggedInUserIdFromCookie } from "~/utilis/cookie";
import {
  ToastErrorMessage,
  ToastSuccessMessage,
} from "~/components/ToastMessage";
import { ToastContainer } from "react-toastify";
import { convertJSONtoBASE64 } from "~/utilis/utilMethods";

const AddPage = () => {
  const [addPage, addPageResponse] = useLazyQuery(store.addPage);
  const userId = getLoggedInUserIdFromCookie();
  const websiteId = useParams().websiteId;

  let initialValues = {
    pageSlug: "",
    pageName: "",
    pageComponents: "",
    metaDescription: "",
    pagePath: "",
    status: "Draft",
    version: "0.1",
    metaTitle:""
  };


  const validationSchema = Yup.object().shape({
    pageSlug: Yup.string().required("Page slug is required").matches(/^(?![\s\S]*\s)[\S\s]*$/, "spaces not allowed"),
    pageName: Yup.string().required("Page Name is required"),
    pageComponents: Yup.string().required("Page Components are required"),
    metaDescription: Yup.string().required("Meta Description is required"),
    metaTitle: Yup.string().required("Meta Title is required"),
    pagePath: Yup.string().required("Page Path is required"),
    version: Yup.string().required("Version is required").matches(/^[0-9]*\.?[0-9]+$/, "Enter Number"),

  });

  useEffect(() => {
    if (addPageResponse.data) {
      ToastSuccessMessage("Page Added Successfully")
      const pageId = store.pages[store.pages.length-1].id;
      redirect(`${pageId}`)
    }
    if (addPageResponse.error) {
      ToastErrorMessage(addPageResponse.error.message)
    }
  }, [addPageResponse.data, addPageResponse.error, addPageResponse.loading])


  const onSubmit = (values) => {
    const base64 = convertJSONtoBASE64(values.pageComponents);
    addPage(CREATE_PAGE, {
      "data": {
        "author": userId,
        "components": base64,
        "metaDescription": values.metaDescription,
        "path": values.pagePath,
        "slug": values.pageSlug,
        "status": values.status,
        "title": values.pageName,
        "version": values.version,
        "website": websiteId,
        "metaTitle":values.metaTitle
      }
    }, {
      cache: "no-store"
    })
  };

  return (
    <>
    <ToastContainer/>
      <PageForm initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} add={true} edit={true} pageId={undefined} loading={addPageResponse.loading} />
    </>
  );
};

export default AddPage;
