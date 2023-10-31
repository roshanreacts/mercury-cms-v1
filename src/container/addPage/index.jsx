"use client";
import { useParams, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import * as Yup from 'yup';
import PageForm from "~/components/PageForm";

const AddPage = () => {
  
  let initialValues = {
    pageSlug: "",
    pageName: "",
    pageComponents: "",
    metaDescription: "",
    pagePath: "",
    status: "draft",
    version: 0.1,
  };


  const validationSchema = Yup.object().shape({
    pageSlug: Yup.string().required("Page slug is required").matches(/^(?![\s\S]*\s)[\S\s]*$/, "spaces not allowed"),
    pageName: Yup.string().required("Page Name is required"),
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
      <PageForm initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} add={true} edit={true} pageId={undefined} />
    </>
  );
};

export default AddPage;
