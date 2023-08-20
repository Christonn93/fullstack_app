// Importing React
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Box, Toolbar } from "@mui/material";
import styled from "@emotion/styled";

// Importing components
import Navbar from "../components/Navbar/Navbar";

import "./Header.css";

const Header = () => {
 const [loggedIn, setLoggedIn] = useState(false);

 return (
  <>
   <header>
    <Box
     sx={{
      flexGrow: 1,
     }}
    >
     <Toolbar
      variant="dense"
      sx={{
       justifyContent: "space-between",
       flexGrow: 1,
       padding: 1,
      }}
     >
      <Box>
       <Link to="/">
        <img src="https://siderite.dev/Posts/files/placeholder.com-logo1_637146769278368505.jpg" alt="Logo" className="logo" />
       </Link>
      </Box>
      <Box
       sx={{
        display: "flex",
        alignItems: "center",
       }}
      >
       {!loggedIn ? (
        <></>
       ) : (
        <>
         <Navbar />
        </>
       )}
      </Box>
     </Toolbar>
    </Box>
   </header>
  </>
 );
};

export default Header;
