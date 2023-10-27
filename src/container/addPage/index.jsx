import React from 'react'
import { BiAddToQueue } from 'react-icons/bi'

const AddPage = () => {
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
                <h2 className="leading-relaxed">Create A Page</h2>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 gap-4">
                <div className="flex gap-4">
                  <div className="">
                    <label className="leading-loose"> Page Slug</label>
                    <input
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Page Slug"
                    />
                  </div>
                  <div className="">
                    <label className="leading-loose"> Page Title</label>
                    <input
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Page Title"
                    />
                  </div>
                </div>
                <div className="">
                    <label className="leading-loose">Page Components</label>
                    <textarea
                      className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Description"'
                      name="Description"
                      id=""
                      cols="20"
                      rows="5"
                    ></textarea>
                  </div>
                <div className="flex gap-4">
                  
                  <div className="">
                    <label className="leading-loose">Meta Description</label>
                    <input
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Meta Description"
                    />
                  </div>
                  <div className="">
                    <label className="leading-loose">Page Path</label>
                    <input
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Page Path"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  
                  <div className="">
                    <label className="leading-loose">Status</label>
                    <select
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-900"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>
                  <div className="">
                    <label className="leading-loose">Version</label>
                    <input
                      type="number"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Version"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button className="bg-gray-900 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPage

