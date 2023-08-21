// Importing react
import React from "react";
import { useNavigate } from "react-router-dom";

// Importing api
import useApi from "../../hooks/useApi";

const LoginUser = (username, password) => {
 const api = useApi("/users/", "GET");
 const apiResponse = api.data;

 const navigate = useNavigate();

 if (apiResponse) {
  const responseUsername = apiResponse.map((e) => e.username);
  const responsePassword = apiResponse.map((e) => e.password);

  if (username === responseUsername) {
   if (password === responsePassword) {
    navigate("/home");
   }
  }
 }
};

export default LoginUser;
