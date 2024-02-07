import { authApiSlice } from "../api/auth/authApiSlice";
import { createLogger } from "redux-logger";

let middleware = [authApiSlice.middleware];

if (import.meta.env.DEV) {
  middleware.unshift(
    createLogger({
      duration: true,
      timestamp: false,
      collapsed: true,
      colors: {
        title: () => "#139BFE",
        prevState: () => "#1C5FAF",
        action: () => "#149945",
        nextState: () => "#A47104",
        error: () => "#ff0005",
      },
      predicate: () => typeof window !== "undefined",
    })
  );
}

export { middleware };
