import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = (reducerPath: string,tagTypes: string[]) => {
  return createApi({
    reducerPath: reducerPath,
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    tagTypes: tagTypes,
    endpoints: () => ({}),
  });
};
