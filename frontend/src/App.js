// Importing React
import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing MUI
import { CssBaseline, ThemeProvider } from "@mui/material";

// Importing base layout
import Layout from "./Layout/Layout";

// Importing auth
import RequireAuth from "./api/auth/RequireAuth";

// Importing pages
import Home from "./routes/Home/Home";
import Login from "./routes/Login/Login";
import NotFound from "./routes/404/NotFound";

// Importing Theme
import { ColorModeContext, useMode } from "../src/style/Theme";

function App() {
 const [theme, colorMode] = useMode();

 return (
  <>
   <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
     <Routes>
      <Route path="/" element={<Layout />}>
       <Route index element={<Login />} />
       <Route element={<RequireAuth />}>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
       </Route>
      </Route>
     </Routes>
    </ThemeProvider>
   </ColorModeContext.Provider>
  </>
 );
}

export default App;
