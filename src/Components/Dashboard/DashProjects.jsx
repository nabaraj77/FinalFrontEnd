import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditProject from "./EditProject";
const MessageAndProjects = () => {
  const [projects, setProjects] = useState([]);
  const [update, setUpdate] = useState(false);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/projects/${id}`);
      toast.success("deleted Successfully!");
    } catch (err) {
      toast.error("Error Occured !");
    }
  };
  const projectsAPI = async () => {
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
    projectsAPI();
  }, [update]);
  return (
    <Box border="2px solid green" padding="10px">
      <Typography variant="h6">Projects</Typography>
      {projects.map((proj, index) => {
        return (
          <Box display="flex" key={index + 1} borderBottom="1px solid green">
            <Typography variant="h6" marginRight="20px">
              {index + 1}
            </Typography>
            <Typography variant="h6" marginRight="20px">
              {proj.title}
            </Typography>
            <Box marginLeft="auto">
              <Button>
                <EditProject
                  sx={{ color: "green" }}
                  proj={proj}
                  update={update}
                  setUpdate={setUpdate}
                />
              </Button>
              <Button onClick={() => handleDelete(proj._id)}>
                <DeleteIcon sx={{ color: "red" }} />
              </Button>
            </Box>
          </Box>
        );
      })}
      <ToastContainer />
    </Box>
  );
};

export default MessageAndProjects;
