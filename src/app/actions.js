"use server";

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
  const data1 = await fetch("http://localhost:3001/api/hello", {
    cache: "no-store",
  });
  const data = await data1.json();
  return { data: data, loading: false, error: undefined };
}

export async function serverFetch(query, variables, options) {
  const data = await fetch(
    "http://localhost:3000/api/graphql",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      ...options
    }
  );
  let parseData = await data.json();
  if (parseData?.errors) {
    return { error: parseData?.errors[0] };
  }
  return parseData?.data;
}
