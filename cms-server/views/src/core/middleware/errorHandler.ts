import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { Middleware, PayloadAction } from "@reduxjs/toolkit";
import { addError, showToast } from "../state/toaster/toasterStateSlice";

type Error = {
  errors: { field: string; message: string }[];
};

// Define the payload type
type Payload = {
  data: Error;
};

export const rtkQueryErrorLogger: Middleware =
  () => (next) => (action: unknown) => {
    if (isPayloadAction(action)) {
      const payloadAction = action as PayloadAction<Payload, string, any>;
      if (isRejectedWithValue(payloadAction)) {
        const payload = payloadAction.payload;
        let errors = payload.data?.errors;
        if (!errors) {
          errors = [{ field: "unknown", message: "Error occurred" }];
        }
        next(addError(errors));
        next(showToast());
      }
    }

    return next(action);
  };

function isPayloadAction(action: any): action is PayloadAction<any, any, any> {
  return action && typeof action.type === "string";
}
