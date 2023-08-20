import { headers } from "../../api/headers";

async function apiRequest(endpoint, method, body) {
 const CORS = "https://cors.noroff.dev/";
 const url = CORS + "http://localhost:5000/api/v1";
 try {
  const fetchedData = await fetch(url + endpoint, {
   method: method,
   headers: headers("application/json"),
   body: JSON.stringify(body),
  });
  const json = await fetchedData.json();
  console.log(json);
 } catch (error) {
  console.error(error);
 }
}

export default apiRequest;

// apiRequest("/users/", "GET");
