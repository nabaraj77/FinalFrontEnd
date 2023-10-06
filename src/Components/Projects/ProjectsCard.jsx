import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FolderOpen from "@mui/icons-material/FolderOpen";
import GitHubIcon from "@mui/icons-material/GitHub";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);
  const getProjectLists = async () => {
    try {
      const res = await axios.get(
        "https://dahalnabaraj.cyclic.cloud/api/v1/projects"
      );
      setProjects(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProjectLists();
  }, []);
  return (
    <>
      {!projects.length > 0 ? (
        <Box
          display="flex"
          minHeight="350px"
          justifyContent="center"
          alignContent="center"
        >
          <CircularProgress sx={{ marginTop: "10rem", color: "#23ce6b" }} />
        </Box>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          marginTop="2rem"
        >
          {projects.map((proj, key) => {
            return (
              <Card
                key={key}
                sx={{
                  maxWidth: 300,
                  marginTop: ".4rem",
                  marginRight: ".2rem",
                  marginLeft: ".2rem",
                  "&:hover": {
                    backgroundColor: "#23ce6b",
                    color: "#ffffff",
                  },
                }}
              >
                <CardMedia
                  sx={{
                    height: 80,
                    display: "flex",
                    alignContent: "center",
                  }}
                >
                  <Box
                    width="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <FolderOpen
                      sx={{
                        color: "#492c86",
                        height: "50px",
                        width: "100px",
                      }}
                    />
                    <Button href={proj.githubLink} target="_blank">
                      <GitHubIcon sx={{ color: "#000000" }} />
                    </Button>
                  </Box>
                </CardMedia>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    marginTop="1rem"
                  >
                    {proj.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {proj.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      )}
    </>
  );
};
export default ProjectCard;
