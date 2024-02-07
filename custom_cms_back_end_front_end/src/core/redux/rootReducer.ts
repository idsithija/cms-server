import { authApiSlice } from "@/core/api";

export const rootReducer = {
  [authApiSlice.reducerPath]: authApiSlice.reducer,
};
