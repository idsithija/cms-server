import { authApiSlice } from "@/core/api";
import { toasterSlice } from "../state/toaster/toasterStateSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  [authApiSlice.reducerPath]: authApiSlice.reducer,
  [toasterSlice.name]: toasterSlice.reducer,
});
