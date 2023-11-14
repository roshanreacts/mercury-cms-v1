import React, { useState } from "react";

const DeleteConfirmPopup = ({ type, title, onConfirm }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmTitle, setConfirmTitle] = useState('');

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div>
        <div className="flex justify-center m-5 w-auto">
          <button
            id="deleteButton"
            onClick={toggleModal}
            className={`block text-white bg-red-600 hover:bg-slate-50 hover:text-primary hover:border-2 hover:border-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
            type="button"
          >
            Delete
          </button>
        </div>
        {isModalOpen && (
          <div className="overflow-y-auto overflow-x-hidden fixed top-1/4 right-0 left-0 z-50 flex justify-center w-full h-screen">
            <div className="relative p-4 w-full max-w-md h-full left-24">
              <div className="relative p-4 text-center bg-blue-100 rounded-lg shadow sm:p-5">
                <h1>Drop {type}</h1>
                <label htmlFor="text">
                  To Drop the {type} <span className="font-bold">{title}</span>, type the name to confirm
                </label>
                <input className="mb-2 mt-2 rounded-lg" value={confirmTitle} onChange={(e) => setConfirmTitle(e.target.value)} type="text" />
                <div className="flex justify-center items-center space-x-4">
                  <button
                    onClick={toggleModal}
                    className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    No, cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!(confirmTitle === title)}
                    onClick={() => {
                      toggleModal()
                      onConfirm()
                    }

                    }
                    className={`${!(confirmTitle === title) && "cursor-not-allowed"} py-2 px-3 text-sm font-medium text-center text-white rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900`}
                  >
                    Yes, I'm sure
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </>
  );
};

export default DeleteConfirmPopup;

