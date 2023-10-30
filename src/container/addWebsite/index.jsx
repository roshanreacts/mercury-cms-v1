"use client"
import React from "react";
import WebsiteForm from "~/components/WebsiteForm";
import * as Yup from "yup";

const AddWebsite = () => {
  const initialValues = {
    websiteSlug: "",
    websiteName: "",
    websiteDescription: "",
    domain: "",
    status: "draft",
  };

  const validationSchema = Yup.object({
    websiteSlug: Yup.string().required("Required"),
    websiteName: Yup.string().required("Required"),
    websiteDescription: Yup.string().required("Required"),
    domain: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };
return(
  <>
  <WebsiteForm initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} />
  </>
)
};

export default AddWebsite;


