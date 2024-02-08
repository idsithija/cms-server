import { useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import { useSelector } from "react-redux";
import { toasterSelector } from "@/core/state/toaster/selectors";

export const ToasterComponent = () => {
  const toastRef = useRef<Toast>(null);
  const { showToast, errors } = useSelector(toasterSelector);

  useEffect(() => {
    if (showToast && toastRef.current) {
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
