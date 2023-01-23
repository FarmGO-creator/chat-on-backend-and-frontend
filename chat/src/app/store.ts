import {configureStore} from "@reduxjs/toolkit";
import {messagesReducer} from "../store/ChatSlice";

export const store = configureStore({
  reducer: {
    chat: messagesReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;