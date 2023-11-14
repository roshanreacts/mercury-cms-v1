import { defaultDataIdFromObject } from "@apollo/client";
import LZUTF8 from "lzutf8";

export const convertJSONtoBASE64 = (data) => {
  return LZUTF8.compress(data, {
    inputEncoding: "String",
    outputEncoding: "Base64",
  });
};

export const convertBASE64toJSON = (data) => {
  return LZUTF8.decompress(data, { inputEncoding: "Base64" });
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Kolkata",
  };

  const formattedDate = new Intl.DateTimeFormat("en-IN", options).format(date);
  return formattedDate;
};
