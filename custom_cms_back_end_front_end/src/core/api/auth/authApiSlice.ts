import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authService, baseUrl } from "@/core/services";

type CurrentUserResponse = {
  currentUser: {
    id: number;
    email: string;
    iat: number;
  } | null;
};

export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCurrentUser: builder.query<CurrentUserResponse, void>({
      query: () => authService.currentUser,
    }),
  }),
});

export const { useGetCurrentUserQuery } = authApiSlice;