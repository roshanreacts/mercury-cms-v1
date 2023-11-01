export async function makeGraphqlQuery(query, variables, options) {
  try {
    let data = await fetch('http://localhost:3000/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables
      })
    });

    const responseData = await data.text();
    try {
      const jsonData = JSON.parse(responseData);
      return jsonData;
    } catch (error) {
      console.error("Invalid JSON format from the server:", responseData);
      throw error;
    }
  } catch (error) {
    console.error("Error occurred during the fetch request:", error);
    throw error;
  }
}
