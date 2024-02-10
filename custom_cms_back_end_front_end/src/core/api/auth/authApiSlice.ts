import { authService } from "@/core/services";
import { apiSlice } from "../apiSlice";

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

type SignInResponse = {
  id: number;
  email: string;
  username: string;
};

export const authApiSlice = apiSlice("authApi", [
  "CurrentUser",
]).injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query<CurrentUserResponse, void>({
      query: () => authService.currentUser,
      providesTags: ["CurrentUser"],
      keepUnusedDataFor: 0.01,
    }),
    signIn: builder.mutation<SignInResponse, SignInPayload>({
      query: (payload) => ({
        url: authService.signIn,
        method: "POST",
        body: payload,
      }),
    }),
    signOut: builder.mutation<any, void>({
      query: () => ({
        url: authService.signOut,
        method: "POST",
      }),
      invalidatesTags: ["CurrentUser"],
    }),
  }),
});

export const { useGetCurrentUserQuery, useSignInMutation, useSignOutMutation } =
  authApiSlice;
