import React from "react";
import { useNavigate } from "react-router-dom";
const Private = ({ children }) => {
  const navigate = useNavigate();
  const user = children.props.loggedIn;
  {
    if (user) {
      return <div>{children}</div>;
    } else {
      return (
        <>
          <h1>Please Login to authenticate</h1>
        </>
      );
    }
  }
};

export default Private;
