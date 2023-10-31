"use server";

import { useQuery } from "@apollo/client";

export async function getTodos() {
  return {
    type: "GET_TODOS",
    payload: {
      url: "/api/todos",
      method: "GET",
    },
  };
}

export async function makeFetchCall() {
  // wait 1 second
  const data1 = await fetch("http://localhost:3000/api/hello", { cache: "no-store" });
  const data = await data1.json();
  return { data: data, loading: false, error: undefined };
}

export async function makeGraphqlQuery(query, variables, options) {
  let data = await fetch('http://localhost:3000/api/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables
    })
  },
    options
  );
  data = await data.json();
  console.log(data, "response");
  return data;
}