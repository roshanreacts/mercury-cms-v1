import React from "react";

const Loader = ({ type, size }) => {
  const getBorderColor = () => {
    switch (type) {
      case "info":
        return "border-blue-400";
      case "success":
        return "border-green-400";
      case "danger":
        return "border-red-700";
      case "warning":
        return "border-yellow-400";
      default:
        return "border-primary"; // Default color
    }
  };

  const getSize = () => {
    switch (size) {
      case "small":
        return "w-8 h-8";
      case "medium":
        return "w-10 h-10";
      case "large":
        return "w-18 h-18";
      default:
        return "w-14 h-14"; // Default size
    }
  };

  return (
    
      <div
        className={`border-4 rounded-full  animate-spin ${getBorderColor()} ${getSize()}`}
        style={{
          borderTopColor: "transparent",
          borderRightColor: "transparent",
        }}
      ></div>
  );
};

export default Loader;


