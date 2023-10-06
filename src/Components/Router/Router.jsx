import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Main from "../Main/Main";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Welcome";
import Private from "../Private";
const Router = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route
          path="/dashboard"
          element={
            <Private>
              <Dashboard loggedIn={loggedIn} />
            </Private>
          }
        />
        <Route path="*" element={<h1>NO URL FOUND.</h1>} />
      </Routes>
    </div>
  );
};

export default Router;
