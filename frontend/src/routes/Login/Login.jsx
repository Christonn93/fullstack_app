import React from "react";

import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material";
import useApi from "../../hooks/useApi";

const Login = () => {
 const api = useApi("/facts/random", "GET");

 console.log(api);

 const onClickHandler = () => {
  alert("clicked");
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
     <TextField required variant={"outlined"} id="outlined-required" label="Username" />
     <TextField required variant={"outlined"} id="outlined-required" label="Password" />
     <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Remember me" />
     </FormGroup>
     <Button variant="contained" onClick={onClickHandler} color="success">
      Log in
     </Button>
    </Box>
   </Box>
  </>
 );
};

export default Login;
