import React from 'react';
import {Box, Button, Paper, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const Form = () => {
  return (
    <Paper variant="outlined" component='form' sx={{p: 1}}>
      <Box component='div' sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Box>


      <TextField
        id="standard-multiline-static"
        label="Message"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        sx={{mt: 5}}
      />
    </Paper>
  );
};

export default Form;