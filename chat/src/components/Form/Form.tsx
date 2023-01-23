import React, {useState} from 'react';
import {Box, Button, CircularProgress, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {MessageTypePost} from "../../types";
import {useAppSelector} from "../../app/hooks";
import {loading} from "../../store/ChatSlice";

interface Props {
  onSubmit: (message: MessageTypePost) => void;
}

const Form:React.FC<Props> = ({onSubmit}) => {
  const btnLoading = useAppSelector(loading)

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
        <Button disabled={btnLoading} variant="contained" endIcon={<SendIcon />} type='submit'>
          {btnLoading ? <CircularProgress size={20}/> : 'Send'}
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