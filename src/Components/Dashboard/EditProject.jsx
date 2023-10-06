import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import EditIcon from "@mui/icons-material/Edit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(projects) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { register, handleSubmit, resetField } = useForm();
  const [disableButton, setDisableButton] = useState(false);

  const editAPI = async (data) => {
    try {
      await axios.patch(
        `https://dahalnabaraj.cyclic.cloud/api/v1/projects/${projects.proj._id}`,
        data
      );
      setOpen(false);
      toast.success("Edited Successfully!");
      resetField("name");
      resetField("title");
      resetField("description");
      resetField("githubLink");
      setDisableButton(false);
      projects.setUpdate(!projects.update);
    } catch (err) {
      toast.error("Error Occured !");
      setDisableButton(false);
    }
  };
  const onSubmit = (data) => {
    setDisableButton(true);
    editAPI(data);
  };
  return (
    <Box>
      <Button onClick={handleOpen}>
        <EditIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} marginTop="1rem" width="400px">
          <Box display="flex" justifyContent="end">
            <Button
              onClick={() => {
                setOpen(false);
              }}
              sx={{
                bgcolor: "white",
                "&:hover": {
                  backgroundColor: "#23ce6b",
                },
              }}
            >
              <CloseIcon />
            </Button>
          </Box>

          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            Edit Projects
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
                  defaultValue={projects.proj.name}
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
                  defaultValue={projects.proj.title}
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
                  defaultValue={projects.proj.githubLink}
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
                  defaultValue={projects.proj.description}
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
                    Edit Project
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Modal>
      <ToastContainer />
    </Box>
  );
}
