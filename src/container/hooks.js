"use client";

import React, { useState, useEffect } from "react";
const useQuery = (promise) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    promise
      .then((data) => {
        setData(data);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setData(null);
        setLoading(false);
      });
  }, []);

  return { loading, error, data };
};

// write a hook which takes a promise and returns the data, loading and error but triggers the promise only when a callback is called

const useLazyQuery = (promise) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = (...args) => {
    setLoading(true);
    promise(...args)
      .then((data) => {
        console.log("::data", data);
        if (data == null) {
          setData(true);
        } else {
          setData(data);
        }
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        console.log("::err", err);
        setError(err);
        setData(null);
        setLoading(false);
      });
  };

  return [execute, { loading, error, data }];
};

export { useQuery, useLazyQuery };
