import React from "react";
import { Box, Typography, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      minHeight="100px"
      marginBottom=".5rem"
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      flexWrap="wrap"
      boxShadow=".1px .1px 2px #cccccc"
    >
      <Box display="flex" alignItems="center">
        <Typography
          variant="h4"
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            display: { xs: "flex", color: "#23ce6b" },
            fontFamily: "monospace",
            textDecoration: "none",
          }}
        >
          𝒩
        </Typography>
        <Typography
          variant="h6"
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            display: { xs: "flex", color: "#000000" },
            fontFamily: "monospace",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          𝒜𝐵𝒜𝑅𝒜𝒥
        </Typography>
        <Typography
          variant="h4"
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            display: { xs: "flex", color: "#23ce6b" },
            fontFamily: "monospace",
            marginLeft: "10px",
            textDecoration: "none",
          }}
        >
          𝒟
        </Typography>
        <Typography
          variant="h6"
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            display: { xs: "flex", color: "#000000" },
            fontFamily: "monospace",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          𝒜𝐻𝒜𝐿
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5">Portfolio of Nabaraj Dahal 👌</Typography>
      </Box>
      <Box>
        <Button href="https://www.linkedin.com/in/nabaraj77/" target="_blank">
          <GitHubIcon sx={{ color: "#000000" }} />
        </Button>
        <Button href="https://github.com/nabaraj77" target="_blank">
          <LinkedInIcon sx={{ color: "#0a66a2" }} />
        </Button>
        <Button href="https://www.facebook.com/nabaraj.dhl77" target="_blank">
          <FacebookIcon sx={{ color: "blue" }} />
        </Button>
        <Button href="https://www.instagram.com/_nabaraj/" target="_blank">
          <InstagramIcon sx={{ color: "#fa7e1e" }} />
        </Button>
      </Box>
    </Box>
  );
};
export default Footer;
