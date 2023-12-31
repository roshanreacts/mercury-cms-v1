import React from "react";
import { BiAddToQueue } from "react-icons/bi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ConfirmActionButton from "../ConfirmActionButton";
import { useRouter } from "next/navigation";
import Loader from "~/container/Loader";
const WebsiteForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  add,
  edit,
  loading,
  handleDelete
}) => {

  const router = useRouter();
  const handleUpdate = () => {
    router.push('?edit=true')
  }
  return (
    <div className="mx-10 my-6 flex flex-col justify-center">
      <div className="relative px-10 py-5 bg-white mx-8 md:mx-0 shadow rounded-3xl">
        <div className="flex justify-between mb-2">
          <div className="flex items-center space-x-5">
            <div className="h-14 w-14 bg-gray-900 rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono">
              <BiAddToQueue />
            </div>
            <div className="block pl-2 font-semibold text-xl text-gray-700">
              <h2 className="leading-relaxed">
                {add
                  ? "Create Website"
                  : edit
                    ? "Update Website"
                    : "View Website"}
              </h2>
            </div>
          </div>
          {!add &&
            <div className="flex justify-end items-end">
              <div>
                <ConfirmActionButton
                  action="Delete"
                  para="Are you sure you want to"
                  onConfirm={handleDelete}
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
          }

        </div>

        <div className="mx-auto space-x-5">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit= {
              (values) => {
                onSubmit(values)
              }
            }
          >
            {({ touched, errors }) => (
              <Form className="flex flex-col gap-4">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="">
                      <label className="leading-loose"> Website Name</label>
                      <Field
                        type="text"
                        name="websiteName"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Website Name"
                        disabled={!(add || edit)}
                      />
                      <ErrorMessage
                        name="websiteName"
                        component="span"
                        className="text-red-500 text-xs"
                      />
                    </div>
                    <div>
                      <label className="leading-loose"> Website Slug</label>
                      <Field
                        type="text"
                        name="websiteSlug"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Website Slug"
                        disabled={!(add || edit)}
                      />
                      <ErrorMessage
                        name="websiteSlug"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                  </div>
                  <div className="">
                    <label className="leading-loose">Website Description</label>
                    <Field
                      as="textarea"
                      name="websiteDescription"
                      className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Description"'
                      placeholder="Description"
                      disabled={!(add || edit)}
                    />
                    <ErrorMessage
                      name="websiteDescription"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="">
                      <label className="leading-loose">Domain</label>
                      <Field
                        type="text"
                        name="domain"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Domain"
                        disabled={!(add || edit)}
                      />
                      <ErrorMessage
                        name="domain"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                    <div className="">
                      <label className="leading-loose">Status</label>
                      <Field
                        as="select"
                        name="status"
                        disabled={!(add || edit)}
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-900"
                      >
                        <option value="Draft">Draft</option>
                        <option value="Published">Published</option>
                      </Field>
                      <ErrorMessage
                        name="status"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                  </div>
                </div>
                <div className="pt-4 flex justify-center">
                  {add ? (
                    <button
                      type="submit"
                      className="bg-gray-900 flex justify-center items-center text-white px-6 py-3 rounded-md focus:outline-none hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary"
                    >
                      {loading ? <Loader size="small" type="info" />:"Create"}
                    </button>
                  ) : (
                    edit && (
                      <button
                        type="submit"
                        className="bg-gray-900 flex justify-center items-center text-white px-6 py-3 rounded-md focus:outline-none hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary"
                      >
                        {loading ? <Loader size="small" type="info" />:"Update"}
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

export default WebsiteForm;
