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
  const data = await fetch("http://localhost:3000/api/hello");
  console.log("data", await data.json());
  return await data.json();
}
