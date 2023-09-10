import { createSlice } from "@reduxjs/toolkit";
import { users } from "../data/contactList";
const initialState = [...users];

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
});

const usersReducer = usersSlice.reducer;
export default usersReducer;
