import { createSlice } from "@reduxjs/toolkit";

const sidemenuSlice = createSlice({
  name: "sidemenu",
  initialState: { isOpen: false },
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { open, close, toggle } = sidemenuSlice.actions;
export default sidemenuSlice.reducer;
