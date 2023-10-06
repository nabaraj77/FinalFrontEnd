import React from "react";
import { Box, Typography } from "@mui/material";
import Typical from "react-typical";
import Avatar from "@mui/material/Avatar";
const AboutMe = () => {
  return (
    <div id="aboutme">
      <Box display="flex" height="300px" marginTop="3rem">
        <Box>
          <Box>
            <Avatar
              alt="Nabara Pic"
              src="/Images/naba.jpg"
              sx={{
                width: 100,
                height: 100,
                margin: "auto",
              }}
            />
            <Typography
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="5px"
            >
              Hello 👋 I am
              <Typography variant="h5" marginLeft="1rem" color="#23ce6b">
                Nabaraj Dahal
              </Typography>
            </Typography>
            <Typography variant="h5" textAlign="center">
              <Typical
                loop={Infinity}
                steps={[
                  "Computer Engineer..",
                  1000,
                  "Full Stack Developer..",
                  1000,
                ]}
              />
              <Typography variant="body1" marginX="4rem" marginTop="4rem">
                Energetic Computer Engineer and Full Stack Developer having good
                skills in HTML, CSS, JavaScript, ReactJS, NodeJS, Bootstrap,
                MUI.
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            display: {
              lg: "flex",
              md: "flex",
              xs: "none",
            },
          }}
        >
          <img src="Images/contact.svg" alt="contact Svg" width="80%" />
        </Box>
      </Box>
    </div>
  );
};

export default AboutMe;
