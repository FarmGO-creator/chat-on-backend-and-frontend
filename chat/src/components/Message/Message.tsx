import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText, Paper, Typography} from "@mui/material";
import {MessageTypeFetch} from "../../types";
import convert from "../../convertDateToString";

interface Props {
  message: MessageTypeFetch
}

const Message:React.FC<Props> = ({message}) => {
  let name = message.author;
  const avatar = name[0] + name[name.length - 1];

  return (
    <Paper elevation={2} sx={{display: 'block', position: 'relative', mb: 2}}>
      <Typography sx={{ fontSize: 10, position: 'absolute', right: '5px', top: '5px' }} color="text.secondary">
        {convert(message)}
      </Typography>

      <ListItem>
        <ListItemAvatar sx={{mb: 'auto', mt: 1}}>
          <Avatar>
            {avatar.toUpperCase()}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={message.message} />
      </ListItem>
    </Paper>
  );
};

export default Message;