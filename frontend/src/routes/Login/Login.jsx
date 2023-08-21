import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material";
import useApi from "../../hooks/useApi";

const Login = () => {
 const api = useApi("/users/", "GET");
 const apiResponse = api.data;
 const navigate = useNavigate();

 const loginUser = (username, password) => {
  if (apiResponse) {
   const responseUsername = apiResponse.map((e) => e.username);
   const responsePassword = apiResponse.map((e) => e.password);

   console.log("responseUsername", responseUsername);
   console.log("responsePassword", responsePassword);

   if (password === responsePassword) ;
  }
 };

 return (
  <>
   <Box>
    <Box
     component={"form"}
     sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 2,
      padding: 2,
     }}
    >
     <Typography variant="h1" component={"h1"}>
      Login
     </Typography>
     <Typography variant="body2" component={"p"}>
      If you don't have a user, please contact customer support
     </Typography>
     <TextField required variant={"outlined"} id="username" label="Username" />
     <TextField required variant={"outlined"} id="password" label="Password" />
     <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Remember me" />
     </FormGroup>
     <Button variant="contained" onClick={() => {
        loginUser("administrator", "admin_password")
        navigate("/home")
        }} color="success">
      Log in
     </Button>
    </Box>
   </Box>
  </>
 );
};

export default Login;
