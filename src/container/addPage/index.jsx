"use client";
import { useParams, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import * as Yup from 'yup';
import PageForm from "~/components/PageForm";

let add = false, edit = false, view = false;
const AddPage = () => {
  edit = useSearchParams().get('edit') === 'true' ? true : false;
  const pageId = useParams().pageId;
  
  let initialValues = {
    pageSlug: "",
    pageName: "",
    pageComponents: "",
    metaDescription: "",
    pagePath: "",
    status: "draft",
    version: 0.1,
  };


  if (pageId === undefined) {
    // this is for addPage
    add = true;
  }
  else if (edit === true) {
    // initialValues = {
    // data will be from db for the page
    // }

    view = false;

  }
  else {
    // initialValues from and page data is only for view purpose
    view = true;
  }


  const validationSchema = Yup.object().shape({
    pageSlug: Yup.string().required("Page slug is required").matches(/^(?![\s\S]*\s)[\S\s]*$/, "spaces not allowed"),
    pageName: Yup.string().required("Page Title is required"),
    pageComponents: Yup.string().required("Page Components are required"),
    metaDescription: Yup.string().required("Meta Description is required"),
    pagePath: Yup.string().required("Page Path is required"),
    version: Yup.number().required("Version is required"),
  });


  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <PageForm initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} add={add} view={view} edit={edit} pageId={pageId} />
    </>
  );
};

export default AddPage;
