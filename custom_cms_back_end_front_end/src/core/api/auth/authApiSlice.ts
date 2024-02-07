import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authService, baseUrl } from "@/core/services";

type SignInPayload = {
  username: string;
  password: string;
};

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
  tagTypes: ["CurrentUser"],
  endpoints: (builder) => ({
    getCurrentUser: builder.query<CurrentUserResponse, void>({
      query: () => authService.currentUser,
      providesTags: ["CurrentUser"],
    }),
    signIn: builder.mutation({
      query: (payload: SignInPayload) => ({
        url: authService.signIn,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["CurrentUser"],
    }),
  }),
});

export const { useGetCurrentUserQuery, useSignInMutation } = authApiSlice;
