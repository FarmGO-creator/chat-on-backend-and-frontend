import {createSlice} from "@reduxjs/toolkit";
import {MessageType} from "../types";
import {RootState} from "../app/store";
import {postMessages} from "./chatThunk";

interface MessagesSliceType {
  messages: MessageType[];
  loader: boolean;
}

const initialState:MessagesSliceType = {
  messages: [],
  loader: false,
}


const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postMessages.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(postMessages.fulfilled, (state) => {
      state.loader = false;
    });
    builder.addCase(postMessages.rejected, (state) => {
      state.loader = false;
    });
  }
});

export const messagesReducer = chatSlice.reducer;
export const selectMessages = (state: RootState) => state.chat.messages;
export const selectLoader = (state: RootState) => state.chat.loader;