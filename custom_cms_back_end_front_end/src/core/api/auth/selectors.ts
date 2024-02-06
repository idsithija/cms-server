import { ReduxState } from "@/lib/redux";

export const authSelector = (state: ReduxState) => state.auth.value;