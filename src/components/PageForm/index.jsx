
import React from 'react'
import { RiFileAddLine } from "react-icons/ri";
import { Formik, Form, Field, ErrorMessage } from "formik";

const PageForm = ({ initialValues, validationSchema, onSubmit }) => {
    
    return (
        <div className="min-h-screen min-w-full bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 md:max-w-xl sm:mx-auto">
                <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <div className="max-w-lg mx-auto space-x-5">
                        <div className="flex items-center text-center space-x-5 mb-6">
                            <div className="h-14 w-14 bg-gray-900 rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono">
                                <RiFileAddLine />
                            </div>
                            <div className="block pl-2 font-semibold text-xl text-gray-700">
                                <h2 className="leading-relaxed">Create Page</h2>
                            </div>
                        </div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {({ touched, errors }) => (
                                <Form>
                                    <div className="">
                                        <label className="leading-loose"> Page Name</label>
                                        <Field
                                            type="text"
                                            name="pageName"
                                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                            placeholder="Page Name"
                                        />
                                        <ErrorMessage
                                            name="pageName"
                                            component="div"
                                            className="text-red-500 text-xs"
                                        />
                                    </div>
                                    <div className="">
                                        <label className="leading-loose"> Page Slug</label>
                                        <Field
                                            type="text"
                                            name="pageSlug"
                                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                            placeholder="Page Slug"
                                        />
                                        <ErrorMessage
                                            name="pageSlug"
                                            component="div"
                                            className="text-red-500 text-xs"
                                        />
                                    </div>
                                    <div className="">
                                        <label className="leading-loose">Page Components</label>
                                        <Field
                                            as="textarea"
                                            name="pageComponents"
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
                                    <div className="">
                                        <label className="leading-loose">Meta Description</label>
                                        <Field
                                            as="textarea"
                                            name="metaDescription"
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
                                    <div className="">
                                        <label className="leading-loose">Page Path</label>
                                        <Field
                                            type="text"
                                            name="pagePath"
                                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                            placeholder="Page Path"
                                        />
                                        <ErrorMessage
                                            name="pagePath"
                                            component="span"
                                            className="text-red-500 text-xs"
                                        />
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="">
                                            <label className="leading-loose">Status</label>
                                            <Field
                                                as="select"
                                                name="status"
                                                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-900"
                                            >
                                                <option value="draft">Draft</option>
                                                <option value="active">Active</option>
                                            </Field>
                                        </div>
                                        <div className="">
                                            <label className="leading-loose">Version</label>
                                            <Field
                                                type="number"
                                                name="version"
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
                                    <div className="pt-4 flex items-center space-x-4">
                                        <button
                                            type="submit"
                                            // disabled={isSubmitting}
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
    )
}

export default PageForm
