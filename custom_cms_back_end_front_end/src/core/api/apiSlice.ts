import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.DEV ? "http://localhost:3000/api" : "/api";

export const apiSlice = (reducerPath: string,tagTypes: string[]) => {
  return createApi({
    reducerPath: reducerPath,
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: tagTypes,
    endpoints: () => ({}),
  });
};
