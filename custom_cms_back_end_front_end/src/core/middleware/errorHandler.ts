import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { Middleware, PayloadAction } from "@reduxjs/toolkit";
import { addError, showToast } from "../state/toaster/toasterStateSlice";

type ErrorData = {
  errors: any[];
};

// Define the payload type
type YourPayloadType = {
  data: ErrorData;
};

export const rtkQueryErrorLogger: Middleware =
  () => (next) => (action: unknown) => {
    if (isPayloadAction(action)) {
      const payloadAction = action as PayloadAction<
        YourPayloadType,
        string,
        any
      >;
      if (isRejectedWithValue(payloadAction)) {
        const payload = payloadAction.payload;
        const errors = payload.data.errors;
        next(addError(errors)); // Dispatch action to add error to the toaster state
        next(showToast());
      }
    }

    return next(action);
  };

function isPayloadAction(action: any): action is PayloadAction<any, any, any> {
  return action && typeof action.type === "string";
}
