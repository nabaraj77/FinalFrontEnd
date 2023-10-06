import { Box, Typography, Button } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ContactMe = () => {
  return (
    <div id="contactme">
      <Box marginTop="3rem">
        <Box
          marginTop="1rem"
          display="flex"
          justifyContent="center"
          marginBottom="2rem"
        >
          <Typography
            variant="h4"
            component="span"
            borderBottom="2px solid #23ce6b"
            marginBottom="1rem"
            fontStyle="italic"
          >
            Contact Me
          </Typography>
        </Box>
        <Box
          marginTop="2rem"
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
        >
          <a href="tel:+977-9843077865">
            <Button
              size="large"
              startIcon={<PhoneIcon />}
              sx={{
                backgroundColor: "#23ce6b",
                color: "#ffffff",
                height: "70px",
                width: "290px",
                marginBottom: "1rem",
                marginRight: "4px",
                marginLeft: "4px",

                "&:hover": {
                  backgroundColor: "#23ce6b",
                  color: "#000000",
                },
              }}
            >
              (+977)9843077865
            </Button>
          </a>
          <a href="mailTo:nabaraj.dhl77@gmail.com">
            <Button
              size="large"
              startIcon={<EmailIcon />}
              sx={{
                backgroundColor: "#23ce6b",
                color: "#ffffff",
                height: "70px",
                width: "290px",
                marginBottom: "1rem",
                marginRight: "4px",
                marginLeft: "4px",

                "&:hover": {
                  backgroundColor: "#23ce6b",
                  color: "#000000",
                },
              }}
            >
              nabaraj.dhl77@gmail.com
            </Button>
          </a>
        </Box>
      </Box>
    </div>
  );
};

export default ContactMe;
