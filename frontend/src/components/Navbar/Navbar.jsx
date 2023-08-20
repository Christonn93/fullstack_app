// Importing React
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importing style
import "./Navbar.css";

// Importing MUI
import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";

// Importing MUI Icons
import Logout from "@mui/icons-material/Logout";
import ViewListIcon from "@mui/icons-material/ViewList";

const Navbar = () => {
 const [status, setStatus] = useState(false);
 const [avatar, setAvatar] = useState("https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/4af3e5d8-3352-49bd-9570-de2aef8972b9/eric-bailey-profile.jpg");
 const [anchorEl, setAnchorEl] = useState(null);
 const navigate = useNavigate();
 const open = Boolean(anchorEl);

 let src = "";
 if (status) src = avatar;

 const handleNavigate = (path) => {
  setAnchorEl(null);
 };

 const handleLogout = () => {
  setAnchorEl(null);
 };

 const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
  setAnchorEl(null);
 };

 return (
  <React.Fragment>
   <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
    <Tooltip title="Account" id="dropDownNavigation" data-cy="navigation-icon-button">
     <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }} aria-controls={open ? "account-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined}>
      <Avatar sx={{ width: 43, height: 43 }} src={src}></Avatar>
     </IconButton>
    </Tooltip>
   </Box>
   <Menu
    anchorEl={anchorEl}
    id="account-menu"
    open={open}
    onClose={handleClose}
    onClick={handleClose}
    PaperProps={{
     elevation: 0,
     sx: {
      overflow: "visible",
      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
      mt: 1.5,
      "& .MuiAvatar-root": {
       width: 32,
       height: 32,
       ml: -0.5,
       mr: 1,
      },
      "&:before": {
       content: '""',
       display: "block",
       position: "absolute",
       top: 0,
       right: 14,
       width: 10,
       height: 10,
       bgcolor: "background.paper",
       transform: "translateY(-50%) rotate(45deg)",
       zIndex: 0,
      },
     },
    }}
    transformOrigin={{ horizontal: "right", vertical: "top" }}
    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
   >
    <Box data-cy="dropdown-menu">
     <MenuItem onClick={() => handleNavigate("profile")} data-cy="navigate-to-profile">
      <ListItemIcon>
       <Avatar src={src} fontSize="small" />
      </ListItemIcon>
      Profile
     </MenuItem>
     <MenuItem onClick={() => handleNavigate("all")} data-cy="navigate-to-profile">
      <ListItemIcon>
       <ViewListIcon fontSize="small" />
      </ListItemIcon>
      All venues
     </MenuItem>
     <Divider />
     <MenuItem onClick={handleLogout} color="error">
      <ListItemIcon>
       <Logout fontSize="small" />
      </ListItemIcon>
      Logout
     </MenuItem>
    </Box>
   </Menu>
  </React.Fragment>
 );
};

export default Navbar;
