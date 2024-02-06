import { createSlice } from "@reduxjs/toolkit";

/* Types */
export interface AuthSliceState {
  value: number;
}

const initialState: AuthSliceState = {
  value: 0,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
  },
});
