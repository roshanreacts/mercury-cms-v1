"use client";
import React from "react";
import * as Yup from 'yup';
import PageForm from "~/components/PageForm";

const AddPage = () => {
  

  const validationSchema = Yup.object().shape({
    pageSlug: Yup.string().required("Required"),
    pageName: Yup.string().required("Page Name is required"),
    pageComponents: Yup.string().required("Page Components are required"),
    metaDescription: Yup.string().required("Meta Description is required"),
    pagePath: Yup.string().required("Page Path is required"),
    version: Yup.number().required("Version is required"),
  });

  const initialValues={
    pageSlug: "",
    pageName: "",
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
      <PageForm initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} />
    </>
  );
};

export default AddPage;
