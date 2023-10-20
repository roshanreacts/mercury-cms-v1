export async function GET(request) {
  return new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });
}
