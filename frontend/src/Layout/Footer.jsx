// Importing React
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Box, List, ListItem, Typography } from "@mui/material";

const Footer = () => {
 return (
  <>
   <Box
    component="div"
    sx={{
     display: "flex",
     flexDirection: "column",
     justifyContent: "center",
     alignItems: "center",
     marginTop: 2,
     marginBottom: 1,
     gap: 2,
    }}
   >
    <Box
     component={"div"}
     sx={{
      display: "flex",
      justifyContent: "space-around",
      width: 2 / 2,
      gap: 2,
     }}
    >
     <List>
      <ListItem>
       <Typography variant="h3" component={"h3"}>
        Header
       </Typography>
      </ListItem>
      <ListItem>Item one</ListItem>
      <ListItem>Item two</ListItem>
      <ListItem>Item tree</ListItem>
     </List>
     <List>
      <ListItem>
       <Typography variant="h3" component={"h3"}>
        Header
       </Typography>
      </ListItem>
      <ListItem>Item one</ListItem>
      <ListItem>Item two</ListItem>
      <ListItem>Item tree</ListItem>
     </List>
    </Box>
    <Typography variant="body1" component={"p"}>
     All rights reserved CTWeb
    </Typography>
   </Box>
  </>
 );
};

export default Footer;
