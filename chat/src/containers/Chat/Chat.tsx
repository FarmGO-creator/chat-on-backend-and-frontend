import React from 'react';
import {Box, Paper} from "@mui/material";
import Form from "../../components/Form/Form";
import Message from "../../components/Message/Message";
import {useAppDispatch} from "../../app/hooks";
import {MessageType} from "../../types";
import {postMessages} from "../../store/chatThunk";

const Chat = () => {
  const dispatch = useAppDispatch();

  const onSubmit = async (message: MessageType) => {
    await dispatch(postMessages(message));
  }


  return (
    <Paper elevation={3} sx={{width: 700, p: 1, minHeight: 700, display: 'flex', flexDirection: "column"}}>
      <Box component='div' sx={{height: 600, overflowY: 'scroll'}}>
        <Message/>
      </Box>

      <Box component='div' sx={{mt: 'auto'}}>
        <Form onSubmit={onSubmit}/>
      </Box>
    </Paper>
  );
};

export default Chat;