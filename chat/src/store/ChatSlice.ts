import {createSlice} from "@reduxjs/toolkit";
import {postMessages} from "./chatThunk";
import {RootState} from "../app/store";

interface MessagesSliceType {
  loaderPost: boolean;
}

const initialState:MessagesSliceType = {
  loaderPost: false,
}


const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postMessages.pending, (state) => {
      state.loaderPost = true;
    });
    builder.addCase(postMessages.fulfilled, (state) => {
      state.loaderPost = false;
    });
    builder.addCase(postMessages.rejected, (state) => {
      state.loaderPost = false;
    });
  }
});

export const messagesReducer = chatSlice.reducer;
export const loading = (state: RootState) => state.chat.loaderPost;