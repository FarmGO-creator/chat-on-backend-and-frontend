import React from 'react';
import {Box, Paper} from "@mui/material";
import Form from "../../components/Form/Form";
import Message from "../../components/Message/Message";

const Chat = () => {
  return (
    <Paper elevation={3} sx={{width: 700, p: 1, minHeight: 700, display: 'flex', flexDirection: "column"}}>
      <Box component='div' sx={{height: 600, overflowY: 'scroll'}}>
        <Message/>
      </Box>

      <Box component='div' sx={{mt: 'auto'}}>
        <Form/>
      </Box>
    </Paper>
  );
};

export default Chat;