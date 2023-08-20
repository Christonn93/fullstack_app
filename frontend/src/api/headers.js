export const headers = (contentType) => {
 const token = localStorage.getItem("ApiToken");
 const headers = {};

 if (contentType) {
  headers["Content-Type"] = contentType;
  headers["Access-Control-Allow-Origin"] = "*";
  headers["Access-Control-Allow-Methods"] = "PUT, GET, POST";
  headers["Access-Control-Allow-Headers"] = `access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,content-type`;
 }

 if (token) {
  headers.Authorization = `Bearer ${token}`;
 }

 return headers;
};
