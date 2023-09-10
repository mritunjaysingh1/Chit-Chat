import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/contactReducer";
import { chatReducer } from "./reducers/chatReducer";

export const store = configureStore({
  reducer: { usersReducer, chatReducer },
});
