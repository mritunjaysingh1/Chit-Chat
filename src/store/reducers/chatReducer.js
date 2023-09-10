import { createSlice } from "@reduxjs/toolkit";
import { chatData } from "../data/chatData";

const initialState = chatData;

const chatSlice = createSlice({
  name: "chatSlice",
  initialState,
  reducers: {
    nameChange: (state, action) => {
      console.log("name : ", action.payload);
      state.name = action.payload;
    },
    addChat: (state, action) => {
      state[state.name] = [...state[state.name], action.payload];
    },
  },
});

export const { nameChange, addChat } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
