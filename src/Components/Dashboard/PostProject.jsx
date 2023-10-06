import React, { useState } from "react";

import { Typography, Button, TextField, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostProject = () => {
  const { register, handleSubmit, resetField } = useForm();
  const [disableButton, setDisableButton] = useState(false);

  const postMessages = async (data) => {
    const dataToPost = {
      name: data.name,
      title: data.title,
      githubLink: data.githubLink,
      description: data.description,
    };
    try {
      await axios.post(
        "https://dahalnabaraj.cyclic.cloud/api/v1/projects",
        dataToPost
      );
      toast.success("Posted Successfully!");
      setDisableButton(false);
      resetField("name");
      resetField("title");
      resetField("githubLink");
      resetField("description");
    } catch (err) {
      toast.error("OOPS error occured!");
      setDisableButton(false);
    }
  };

  const onSubmit = (data) => {
    setDisableButton(true);
    postMessages(data);
  };
  return (
    <Box border="2px solid green" width="300px">
      <Typography
        variant="h4"
        component="span"
        borderBottom="2px solid #23ce6b"
        fontStyle="italic"
        marginLeft="2rem"
      >
        Post Projects
      </Typography>

      <Box display="flex">
        <Box width="500px" padding="20px">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Name"
              variant="outlined"
              margin="normal"
              fullWidth
              color="success"
              autoComplete="false"
              {...register("name", {
                required: true,
              })}
            />

            <TextField
              label="Title"
              variant="outlined"
              margin="normal"
              type="text"
              color="success"
              fullWidth
              autoComplete="false"
              {...register("title", { required: true })}
            />
            <TextField
              label="Github Link"
              variant="outlined"
              margin="normal"
              type="text"
              color="success"
              fullWidth
              autoComplete="false"
              {...register("githubLink", { required: true })}
            />

            <TextField
              id="outlined-multiline-static"
              label="Description"
              margin="normal"
              multiline
              color="success"
              fullWidth
              autoComplete="false"
              {...register("description", { required: true })}
              rows={4}
            />

            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                type="submit"
                disabled={disableButton}
                sx={{
                  width: "40%",
                  height: "50px",
                  marginTop: ".8rem",
                  backgroundColor: "#23ce6b",
                  fontSize: "15px",
                  "&:hover": {
                    backgroundColor: "#23ce6b",
                    color: "#000000",
                  },
                }}
              >
                Post Project
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default PostProject;
