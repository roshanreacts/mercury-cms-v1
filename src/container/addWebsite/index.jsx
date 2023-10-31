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
    status: "Draft",
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
return(
  <>
  <WebsiteForm initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} add={true} edit={true} />
  </>
)
};

export default AddWebsite;


