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

export const authApiSlice = apiSlice("authApi", [
  "CurrentUser",
]).injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query<CurrentUserResponse, void>({
      query: () => authService.currentUser,
      providesTags: ["CurrentUser"],
      keepUnusedDataFor: 0.01,
    }),
    signIn: builder.mutation({
      query: (payload: SignInPayload) => ({
        url: authService.signIn,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useGetCurrentUserQuery, useSignInMutation } = authApiSlice;
