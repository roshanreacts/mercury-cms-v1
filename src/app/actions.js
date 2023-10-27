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
  const data1 = await fetch("http://localhost:3000/api/hello", {cache: "no-store"});
  const data = await data1.json();
  return data;
}
