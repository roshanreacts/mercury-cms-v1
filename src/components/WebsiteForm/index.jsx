import React from 'react'
import { BiAddToQueue } from "react-icons/bi";
import { Formik, Form, Field, ErrorMessage } from "formik";
const WebsiteForm = ({ initialValues, validationSchema,onSubmit }) => {
  
    return (
        <div className="min-h-screen min-w-full bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 md:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
              <div className="max-w-lg mx-auto space-x-5">
                <div className="flex items-center space-x-5">
                  <div className="h-14 w-14 bg-gray-900 rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono">
                    <BiAddToQueue />
                  </div>
                  <div className="block pl-2 font-semibold text-xl text-gray-700">
                    <h2 className="leading-relaxed">Create Website</h2>
                  </div>
                </div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {({ touched, errors }) => (
                    <Form className="flex flex-col gap-4">
                      <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 gap-4">
                        <div className="flex gap-4">
                          <div className="">
                            <label className="leading-loose"> Website Name</label>
                            <Field
                              type="text"
                              name="websiteName"
                              className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                              placeholder="Website Name"
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
                          />
                          <ErrorMessage
                            name="websiteDescription"
                            component="div"
                            className="text-red-500 text-xs"
                          />
                        </div>
    
                        <div className="flex gap-4">
                          <div className="">
                            <label className="leading-loose">Domain</label>
                            <Field
                              type="text"
                              name="domain"
                              className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                              placeholder="Domain"
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
                      <div className="pt-4 flex items-center space-x-4">
                        <button
                          type="submit"
                          className="bg-gray-900 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                        >
                          Create
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      );
}

export default WebsiteForm
