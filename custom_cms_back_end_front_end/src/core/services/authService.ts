export type AuthService = {
  currentUser: string;
};

export const authService: AuthService = {
    currentUser: `/auth/currentuser`,
};