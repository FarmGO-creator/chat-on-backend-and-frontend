import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText, Paper, Typography} from "@mui/material";

const Message = () => {
  let name = 'Рома';
  const avatar = name[0] + name[name.length - 1];

  return (
    <Paper elevation={2} sx={{display: 'inline-block', position: 'relative', mb: 2}}>
      <Typography sx={{ fontSize: 10, position: 'absolute', right: '5px', top: '5px' }} color="text.secondary">
        08.10.2023
      </Typography>

      <ListItem>
        <ListItemAvatar sx={{mb: 'auto', mt: 1}}>
          <Avatar>
            {avatar.toUpperCase()}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary='Здравствуйте, сегодня занятие онлайн или оффлайн ?' />
      </ListItem>
    </Paper>
  );
};

export default Message;