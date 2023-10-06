import React, { useEffect, useState } from "react";
import axios from "axios";

import { Box } from "@mui/material";
import Navbar from "./Navbar";
import PostProject from "./PostProject";
import DashProjects from "./DashProjects";
import DashMessages from "./DashMessages";

axios.defaults.withCredentials = true;
let firstRender = true;
const Dashboard = () => {
  const [user, setUser] = useState();

  const refreshToken = async () => {
    const res = await axios
      .get("http://localhost:3000/api/v1/refresh", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  const sednRequest = async () => {
    const res = await axios
      .get("https://dahalnabaraj.cyclic.cloud/api/v1/users/getuser", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      sednRequest().then((data) => setUser(data.user));
    }
    let interval = setInterval(() => {
      refreshToken().then((data) => setUser(data.user));
    }, 1000 * 29);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <Navbar />
      {/* //PROJECT SECTION */}
      <Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
        <PostProject />
        <DashProjects />
        <DashMessages />
      </Box>
    </Box>
  );
};

export default Dashboard;
