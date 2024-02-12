import { combineReducers } from "@reduxjs/toolkit";
import { authApiSlice } from "@/core/api";
import { toasterStateSlice } from "../state/toaster/toasterStateSlice";

export const rootReducer = combineReducers({
  [authApiSlice.reducerPath]: authApiSlice.reducer,
  [toasterStateSlice.name]: toasterStateSlice.reducer,
});
