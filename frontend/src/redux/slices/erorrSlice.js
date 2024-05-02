import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const errorSlice = createSlice({
  name: "erorr",
  initialState,
  reducers: {
    setError: (state, action) => {
      return action.payload;
    },
    setClear: () => {
      return initialState;
    },
  },
});

export const { setError, setClear } = errorSlice.actions;

export const selectErorr = (state) => state.error;

export default errorSlice.reducer;
