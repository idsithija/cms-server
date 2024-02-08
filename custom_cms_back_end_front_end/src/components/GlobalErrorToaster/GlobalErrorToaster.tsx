import { useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import { toasterSelector, useSelector } from "@/core/redux";

export const GlobalErrorToaster = () => {
  const toastRef = useRef<Toast>(null);
  const { showToast, errors } = useSelector(toasterSelector);

  useEffect(() => {
    if (showToast && toastRef.current && errors.length > 0) {
      errors.forEach((error) => {
        toastRef.current?.show({
          severity: "error",
          summary: "Error",
          detail: error.message,
        });
      });
    }
  }, [showToast, errors, toastRef]);

  return <Toast ref={toastRef} />;
};
