import { ErrorMessage } from "formik";
import { ReactNode } from "react";

type Props = {
  name: string;
  inputicon: ReactNode;
  children: ReactNode;
  label?: string;
  required?: boolean;
  disable?: boolean;
  visible?: boolean;
};

const InputLayout = (props: Props) => {
  const { name, inputicon, children, label, required, disable, visible } =
    props;

  const disabledClass = disable ? "disabled" : "";
  const requiredClass = required ? "required" : "";
  const classNames = `${disabledClass} ${requiredClass}`.trim();

  return (
    !visible && (
      <div>
        {label && (
          <label htmlFor={name} className={classNames}>
            {label}
          </label>
        )}
        <div className="p-inputgroup flex-1">
          <span className="p-inputgroup-addon">{inputicon}</span>
          {children}
        </div>
        {required && (
          <ErrorMessage className="from-error" name={name} component="span" />
        )}
      </div>
    )
  );
};

export default InputLayout;
