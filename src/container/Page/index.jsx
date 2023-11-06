"use client";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import PageForm from "~/components/PageForm";
import { useLazyQuery } from "../hooks";
import store from "~/store";
import { GET_ALL_PAGES, GET_PAGE, UPDATE_PAGE } from "~/utilis/queries";
import { getLoggedInUserIdFromCookie } from "~/utilis/cookie";
import {
  ToastErrorMessage,
  ToastSuccessMessage,
} from "~/components/ToastMessage";
import { ToastContainer } from "react-toastify";
import Image from "next/image";

let add = false,
  edit = false;
const PageUpdateView = () => {
  edit = useSearchParams().get("edit") === "true" ? true : false;
  const pageId = useParams().pageId;
  const websiteId = useParams().websiteId;
  const userId = getLoggedInUserIdFromCookie();

  const [initialValues, setInitialValues] = useState({
    pageSlug: "",
    pageName: "",
    pageComponents: "",
    metaDescription: "",
    pagePath: "",
    status: "draft",
    version: 0.1,
  });

  const [getPages, pagesResponse] = useLazyQuery(store.getAllPages);
  const [getSinglePage, singlePageResponse] = useLazyQuery(store.getPageWithId);
  const [updatePage, updatePageResponse] = useLazyQuery(store.updatePageById)
  useEffect(() => {
    if (store.pages.length === 0) {
      getPages(
        GET_ALL_PAGES,
        {
          where: {
            author: {
              is: userId,
            },
            website: {
              is: websiteId,
            },
          },
        },
        {
          cache: "no-store",
        }
      );
    } else {
      pagesResponse.data = true;
    }
  }, []);

  useEffect(() => {
    if (pagesResponse.data) {
      getSinglePage(
        GET_PAGE,
        {
          where: {
            id: {
              is: pageId,
            },
          },
        },
        {
          cache: "no-store",
        },
        pageId
      );
    }
  }, [pagesResponse.data, pagesResponse.error]);

  useEffect(() => {
    if (singlePageResponse.data) {
      const pageData = store.pages.find((page) => page.id === pageId);

      setInitialValues({
        pageSlug: pageData?.slug || "",
        pageName: pageData?.title || "",
        pageComponents: pageData?.components || "",
        metaDescription: pageData?.metaDescription || "",
        pagePath: pageData?.path || "",
        status: pageData?.status || "draft",
        version: pageData?.version || 0.1,
      });
    }
  }, [singlePageResponse.data, singlePageResponse.error]);

  useEffect(() => {
  }, [initialValues]);


  useEffect(() => {
    if (updatePageResponse.data) {
      ToastSuccessMessage("Updated Page!!");
      window.location.href = `${pageId}`;
    }
    if (updatePageResponse.error) {
      ToastErrorMessage(updatePageResponse.error.message);
    }
  }, [updatePageResponse.data, updatePageResponse.error, updatePageResponse.loading]);

  const onSubmit = (values) => {
    updatePage(UPDATE_PAGE, {
      data: {
        title: values.pageName,
        slug: values.pageSlug,
        components: values.pageComponents,
        metaDescription: values.metaDescription,
        path: values.pagePath,
        status: values.status,
        version: values.version,
        author: userId
      },
      updatePageId: pageId
    },
    {
      cache: "no-store"
    },
    pageId);
  };

  const validationSchema = Yup.object().shape({
    pageSlug: Yup.string()
      .required("Page slug is required")
      .matches(/^(?![\s\S]*\s)[\S\s]*$/, "spaces not allowed"),
    pageName: Yup.string().required("Page Name is required"),
    pageComponents: Yup.string().required("Page Components are required"),
    metaDescription: Yup.string().required("Meta Description is required"),
    pagePath: Yup.string().required("Page Path is required"),
    version: Yup.string().required("Version is required").matches(/^[0-9]*\.?[0-9]+$/, "Only Numbers Are Accepted"),
  });

  return (
    <>
      <ToastContainer />

      {initialValues.pageName ? (
        <PageForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          add={false}
          edit={edit}
          pageId={pageId}
          onSubmit={onSubmit}
          loading={updatePageResponse.loading}
        />
      ) : (
        <div className="h-[100vh] flex justify-center items-center">
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert animate-pulse animate-infinite animate-ease-in-out"
            src="/mercury-logo.png"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      )}
    </>
  );
};

export default PageUpdateView;
