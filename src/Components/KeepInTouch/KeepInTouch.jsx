import React, { useState } from "react";

import { Typography, Button, TextField, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const KeepInTouch = () => {
  const { register, handleSubmit, resetField } = useForm();
  const [disableButton, setDisableButton] = useState(false);

  const postMessages = async (data) => {
    try {
      const res = await axios.post(
        "https://dahalnabaraj.cyclic.cloud/api/v1/messages",
        data
      );
      if (res.status === 201) {
        toast.success("Message Sent Successfully!");
        setDisableButton(false);
        resetField("name");
        resetField("email");
        resetField("message");
      }
    } catch (err) {
      toast.error("Oops Error Occured!");
      setDisableButton(false);
      resetField("name");
      resetField("email");
      resetField("message");
    }
  };

  const onSubmit = (data) => {
    setDisableButton(true);
    postMessages(data);
  };
  return (
    <Box marginTop="3rem" marginBottom="3rem" id="keepintouch">
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
          fontStyle="italic"
        >
          Keep In Touch
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          marginRight="5rem"
          sx={{
            display: {
              lg: "flex",
              md: "flex",
              xs: "none",
            },
          }}
        >
          <img
            src="/Images/contact.gif"
            alt="Contact GIF"
            height="300px"
            width="400px"
          />
        </Box>
        <Box width="500px" padding="20px">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Full Name"
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
              label="Email"
              variant="outlined"
              margin="normal"
              type="email"
              color="success"
              fullWidth
              autoComplete="false"
              {...register("email", { required: true })}
            />

            <TextField
              id="outlined-multiline-static"
              label="Message"
              margin="normal"
              multiline
              color="success"
              fullWidth
              autoComplete="false"
              {...register("message", { required: true })}
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
                Send Message
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default KeepInTouch;
