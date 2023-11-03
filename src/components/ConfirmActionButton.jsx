import { useState } from "react";

const ConfirmActionButton = ({ action, para, onConfirm, type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleConfirm = () => {
    toggleModal();
    onConfirm();
  };

  const getButtonColor = () => {
    switch (type) {
      case "warning":
        return "bg-red-500";
      case "success":
        return "bg-green-500";
      case "info":
        return "bg-blue-500";
      default:
        return "bg-red-500";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "warning":
        return (
          <svg
            className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG Path for warning icon */}
          </svg>
        );
      case "success":
        return (
          <svg
            className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG Path for success icon */}
          </svg>
        );
      case "info":
        return (
          <svg
            className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG Path for info icon */}
          </svg>
        );
      default:
        return (
          <svg
            className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Default SVG Path */}
          </svg>
        );
    }
  };

  return (
    <div className="">
      <div>
        <div className="flex justify-center m-5">
          <button
            id="deleteButton"
            onClick={toggleModal}
            className={`block text-white ${getButtonColor()} hover:bg-slate-50 hover:text-primary hover:border-2 hover:border-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
            type="button"
          >
            {action}
          </button>
        </div>

        {isModalOpen && (
          <div id="deleteModal" className="overflow-y-auto overflow-x-hidden fixed top-[40%] right-0 left-0 z-50 flex justify-center w-full h-screen">
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
              <div className="relative p-4 text-center bg-gray-300 rounded-lg shadow dark:bg-gray-800 sm:p-5">
                {getIcon()}
                <p className="mb-4 text-white dark:text-gray-300">
                  {` ${para}  ${action}?`}
                </p>
                <div className="flex justify-center items-center space-x-4">
                  <button
                    onClick={toggleModal}
                    className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    No, cancel
                  </button>
                  <button
                    type="submit"
                    onClick={handleConfirm}
                    className={`py-2 px-3 text-sm font-medium text-center text-white ${getButtonColor()} rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900`}
                  >
                    Yes, I'm sure
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmActionButton;


