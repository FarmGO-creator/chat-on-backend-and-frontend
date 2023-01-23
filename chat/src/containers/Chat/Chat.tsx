import React, {useEffect, useState} from 'react';
import {Box, LinearProgress, Paper} from "@mui/material";
import Form from "../../components/Form/Form";
import Message from "../../components/Message/Message";
import {useAppDispatch} from "../../app/hooks";
import {MessageTypeFetch, MessageTypePost} from "../../types";
import {postMessages} from "../../store/chatThunk";
import axiosApi from "../../axiosApi";

const Chat = () => {
  const [messages, setMessages] = useState<MessageTypeFetch[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let datetime = '';

    const fetchMessages = async () => {
      const response = await axiosApi.get<MessageTypeFetch[]>('/messages?datetime=' + datetime);
      const newMessages = response.data;

      if (newMessages.length > 0) {
        setMessages(prev => [...prev, ...newMessages]);
        datetime = newMessages[newMessages.length - 1].datetime;
      }
    }
    fetchMessages().catch(console.error);
    setInterval(fetchMessages, 3000);
  }, []);

  const onSubmit = async (message: MessageTypePost) => {
    await dispatch(postMessages(message));
  }

  if (messages.length > 30) {
    messages.splice(0, 1);
  }


  return (
    <Paper elevation={3} sx={{width: 700, p: 1, minHeight: 700, display: 'flex', flexDirection: "column"}}>
      <Box component='div' sx={{height: 600, overflowY: 'scroll'}}>
        {
          messages.length > 0 ? (
            messages.map(message => (
              <Message key={message.id} message={message}/>
            ))
          ) : <LinearProgress/>
        }
      </Box>

      <Box component='div' sx={{mt: 'auto'}}>
        <Form onSubmit={onSubmit}/>
      </Box>
    </Paper>
  );
};

export default Chat;