import React, { useEffect } from "react";
import { RiFileAddLine } from "react-icons/ri";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import ConfirmActionButton from "../ConfirmActionButton";
import { useRouter } from "next/navigation";

const PageForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  add,
  edit,
  pageId,
  loading
}) => {

  const router = useRouter();


const handleAction =()=>{
  console.log("delete");
}

  const handleUpdate = () => {
    console.log("update clicked");
    router.push("?edit=true")
  };
  return (
    <div className="relative mx-4">
      <div className="relative bg-white shadow rounded-3xl py-3 px-10">
        <div className="flex justify-between mb-4">
          <div className="flex items-center text-center space-x-5">
            <div className="h-14 w-14 bg-gray-900 rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono">
              <RiFileAddLine />
            </div>
            <div className="block pl-2 font-semibold text-xl text-gray-700">
              <h2 className="leading-relaxed">
                {add ? "Create Page" : edit ? "Update Page" : "View Page"}
              </h2>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-end items-end">
            <div className="mb-2 sm:mb-0 sm:mr-2">
              <ConfirmActionButton
                action="Delete"
                para="Are you sure you want to"
                onConfirm={handleAction}
                type="warning"
              />
            </div>
            {!edit &&
                <div>
                  <ConfirmActionButton
                    action="Update"
                    para="Are you sure you want to"
                    onConfirm={handleUpdate}
                    type="info"
                  />
                </div>
              }
          </div>
        </div>

        <div className="text-left">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ touched, errors }) => (
              <Form>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-left">
                    <label className="leading-loose"> Page Name</label>
                    <Field
                      type="text"
                      name="pageName"
                      disabled={!(add || edit)}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Page Name"
                    />
                    <ErrorMessage
                      name="pageName"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                  <div className="text-left">
                    <label className="leading-loose"> Page Slug</label>
                    <Field
                      type="text"
                      name="pageSlug"
                      disabled={!(add || edit)}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Page Slug"
                    />
                    <ErrorMessage
                      name="pageSlug"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                </div>
                <div className="text-left">
                  <label className="leading-loose">Page Components</label>
                  <Field
                    as="textarea"
                    name="pageComponents"
                    disabled={!(add || edit)}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Page Components"
                    rows="5"
                  />
                  <ErrorMessage
                    name="pageComponents"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>
                <div className="text-left">
                  <label className="leading-loose">Meta Description</label>
                  <Field
                    as="textarea"
                    name="metaDescription"
                    disabled={!(add || edit)}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Meta Description"
                    rows="5"
                  />
                  <ErrorMessage
                    name="metaDescription"
                    component="span"
                    className="text-red-500 text-xs"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="text-left">
                    <label className="leading-loose">Page Path</label>
                    <Field
                      type="text"
                      name="pagePath"
                      disabled={!(add || edit)}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-900"
                      placeholder="Page Path"
                    />
                    <ErrorMessage
                      name="pagePath"
                      component="span"
                      className="text-red-500 text-xs"
                    />
                  </div>
                  <div className="text-left">
                    <label className="leading-loose">Status</label>
                    <Field
                      as="select"
                      name="status"
                      disabled={!(add || edit)}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-900"
                    >
                      <option value="Draft">Draft</option>
                      <option value="Active">Active</option>
                    </Field>
                  </div>
                  <div className="text-left">
                    <label className="leading-loose">Version</label>
                    <Field
                      type="number"
                      name="version"
                      disabled={!(add || edit)}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Version"
                    />
                    <ErrorMessage
                      name="version"
                      component="span"
                      className="text-red-500 text-xs"
                    />
                  </div>
                </div>
                <div className="pt-4 flex justify-center space-x-4">
                  {add ? (
                    <button
                      type="submit"
                      className="bg-gray-900 flex justify-center items-center text-white px-6 py-3 rounded-md focus:outline-none hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary"
                    >
                      Create
                    </button>
                  ) : (
                    edit && (
                      <button
                        type="submit"
                        className="bg-gray-900 flex justify-center items-center text-white px-6 py-3 rounded-md focus:outline-none hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary"
                      >
                        Update
                      </button>
                    )
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default PageForm;
