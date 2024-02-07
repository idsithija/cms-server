export type AuthService = {
  signIn: string;
  currentUser: string;
};

export const authService: AuthService = {
  signIn: `/auth/signin`,
  currentUser: `/auth/currentuser`,
};
