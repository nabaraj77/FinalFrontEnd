import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.post(
        "https://dahalnabaraj.cyclic.cloud/api/v1/users/logout",
        {
          withCredentials: true,
        }
      );
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">Hi Nabaraj</Typography>
          <Box marginLeft="auto">
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
