import React from "react";

import { Typography, Button, TextField, Box } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const navigate = useNavigate();
  const { register, handleSubmit, resetField } = useForm();
  const loginAPI = async (data) => {
    try {
      const res = await axios.post(
        "https://dahalnabaraj.cyclic.cloud/api/v1/users/login",
        {
          email: data.email,
          password: data.password,
        }
      );
      console.log(res);
      props.setLoggedIn(true);
    } catch (err) {
      console.log(err);
    }

    // try {
    //   let res = await axiosData.post("/users/login", {
    //     email: data.email,
    //     password: data.password,
    //   });
    //   navigate("/welcome");
    //   console.log(res);
    //   resetField("email");
    //   resetField("password");
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const onSubmit = (data) => {
    loginAPI(data);
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        width="350px"
        margin="1.5rem"
        boxShadow="2px 3px 10px #482b84"
        padding="20px"
      >
        <Typography variant="h4" textAlign="center">
          Login
        </Typography>

        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Email"
            variant="outlined"
            required
            margin="normal"
            fullWidth
            autoComplete="false"
            {...register("email")}
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            required
            type="password"
            fullWidth
            autoComplete="false"
            {...register("password")}
          />
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: "40%",
                height: "50px",
                marginTop: ".8rem",
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
