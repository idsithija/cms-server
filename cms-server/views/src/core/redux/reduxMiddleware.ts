import { authApiSlice } from "../api/auth/authApiSlice";
import { createLogger } from "redux-logger";
import { rtkQueryErrorLogger } from "../middleware/errorHandler";

let reduxMiddleware = [authApiSlice.middleware, rtkQueryErrorLogger];

if (import.meta.env.DEV) {
  reduxMiddleware.unshift(
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

export { reduxMiddleware };
