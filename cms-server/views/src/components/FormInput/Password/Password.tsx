import { InputPassword } from "../types";
import InputLayout from "../InputLayout";
import { Password as PrimePassword } from "primereact/password";

export const Password = (props: InputPassword) => {
  const { inputicon, label, required, visible, ...otherProps } = props;

  return (
    <InputLayout
      name={otherProps.name}
      inputicon={inputicon}
      label={label}
      required={required}
      visible={visible}
    >
      <PrimePassword {...otherProps} />
    </InputLayout>
  );
};
