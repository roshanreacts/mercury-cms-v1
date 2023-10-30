"use client";
import React from "react";
import * as Yup from 'yup';
import PageForm from "~/components/PageForm";

const AddPage = () => {
  

  const validationSchema = Yup.object().shape({
    pageSlug: Yup.string().required("Page slug is required").matches(/^(?![\s\S]*\s)[\S\s]*$/, "spaces not allowed"),
    pageName: Yup.string().required("Page Title is required"),
    pageComponents: Yup.string().required("Page Components are required"),
    metaDescription: Yup.string().required("Meta Description is required"),
    pagePath: Yup.string().required("Page Path is required"),
    version: Yup.number().required("Version is required"),
  });

  const initialValues={
    pageSlug: "",
    pageName: "",
    pageTitle: "",
    pageComponents: "",
    metaDescription: "",
    pagePath: "",
    status: "draft",
    version: 0.1,
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <PageForm initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}/>
    </>
  );
};

export default AddPage;
