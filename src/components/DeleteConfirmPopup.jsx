import React from "react";

const DeleteConfirmPopup = (type, title,onConfirm,togglePopup) => {



  return (
    
        <div
          id="deleteModal"
          className="overflow-y-auto overflow-x-hidden fixed top-[40%] right-0 left-0 z-50 flex justify-center w-full h-screen"
        >
          <div className="relative p-4 w-full max-w-md h-full left-24">
            <div className="relative p-4 text-center bg-blue-100 rounded-lg shadow sm:p-5">
              <label htmlFor="text">
                To Drop the {type} <span className="font-bold">{title}</span>, type
                the name to confirm
              </label>
              <input className="mb-2 mt-2 rounded-lg" type="text" />
              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={toggleModal}
                  className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  No, cancel
                </button>
                <button
                  type="submit"
                  onClick={onConfirm}
                  className={`py-2 px-3 text-sm font-medium text-center text-white rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900`}
                >
                  Yes, I'm sure
                </button>
              </div>
            </div>
          </div>
        </div>
  );
};

export default DeleteConfirmPopup;
