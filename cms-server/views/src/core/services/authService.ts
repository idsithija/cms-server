export type AuthService = {
  signIn: string;
  currentUser: string;
  signOut: string;
};

export const authService: AuthService = {
  currentUser: `/auth/currentuser`,
  signIn: `/auth/signin`,
  signOut: `auth/signout`,
};
