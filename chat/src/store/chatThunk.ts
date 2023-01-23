import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {MessageTypePost} from "../types";

export const postMessages = createAsyncThunk<void, MessageTypePost>(
  'messages/post',
  async (message) => {
    await axiosApi.post('/messages', message);
  }
);