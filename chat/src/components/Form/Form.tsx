import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {MessageTypePost} from "../../types";

interface Props {
  onSubmit: (message: MessageTypePost) => void;
}

const Form:React.FC<Props> = ({onSubmit}) => {
  const [value, setValue] = useState<MessageTypePost>({
    author: '',
    message: '',
  });

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setValue(prev => ({...prev, [name]:value}))
  };

  const onFormSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    onSubmit({...value});
    setValue({
      author: '',
      message: '',
    })
  }



  return (
    <Box component='form' sx={{p: 1}} onSubmit={onFormSubmit}>
      <Box component='div' sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name='author'
          value={value.author}
          onChange={onChange}
          required
        />
        <Button variant="contained" endIcon={<SendIcon />} type='submit'>
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
        name='message'
        value={value.message}
        onChange={onChange}
        required
      />
    </Box>
  );
};

export default Form;