import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialstate: [{}],
  reducers: {
    getUser: (state) => {
      state.push({ name: "tyler belmonte" });
      state.push({ name: "rocky belmonte" });
    },
  },
});

export default slice.reducers;
export const { getUser } = slice.actions;
