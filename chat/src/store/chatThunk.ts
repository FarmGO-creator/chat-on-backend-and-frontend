import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {MessageType} from "../types";

export const postMessages = createAsyncThunk<void, MessageType>(
  'messages/fetch',
  async (message) => {
    await axiosApi.post('/messages', message);
  }
);