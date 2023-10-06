import React from "react";

import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ProjectCard from "./ProjectsCard";

const Projects = () => {
  return (
    <Box marginTop="2rem" id="portfolio">
      <Box
        sx={{
          marginTop: {
            md: "0px",
            xs: "4rem",
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="10 100 1240 145"
          className="path"
        >
          <path
            fill="#23ce6b"
            fillOpacity="1"
            d="M0,1L0,101.3C120,139,240,213,360,229.3C480,245,600,203,720,181.3C840,160,960,160,1080,176C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </Box>
      <Box marginTop="3rem" display="flex" justifyContent="center">
        <Typography
          variant="h4"
          component="span"
          borderBottom="2px solid #23ce6b"
          marginBottom="1rem"
          fontStyle="italic"
        >
          Portfolio Projects
        </Typography>
      </Box>
      <ProjectCard />
    </Box>
  );
};

export default Projects;
