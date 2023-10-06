import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const DashMessages = () => {
  const [messages, setMessages] = useState([]);
  const messageAPI = async () => {
    try {
      let res = await axios.get(
        "https://dahalnabaraj.cyclic.cloud/api/v1/messages"
      );
      setMessages(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    messageAPI();
  }, []);

  return (
    <Box bgcolor="pink" border="2px solid green">
      <Typography variant="h6">Messages</Typography>
      {messages.map((message, index) => {
        return (
          <Box
            display="flex"
            borderBottom="1px solid green"
            padding="10px"
            key={index}
          >
            <Typography variant="h6" width="20px">
              {index + 1}
            </Typography>
            <Typography variant="h6" width="150px">
              {message.name}
            </Typography>
            <Typography variant="h6">{message.message}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default DashMessages;
