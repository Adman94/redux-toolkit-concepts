import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Dave Grey" },
  { id: "1", name: "Mike Sherm" },
  { id: "2", name: "Chief Keef" },
  { id: "3", name: "310babii" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
