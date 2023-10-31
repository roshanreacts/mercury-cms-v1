export async function GET(request) {
  return Response.json([
    {
      userId: 1,
      id: 1,
      title: "Home",
      body: "Home Content"
    },
    {
      userId: 2,
      id: 2,
      title: "Contact",
      body: "Contact Content"
    },
  ]);
}
