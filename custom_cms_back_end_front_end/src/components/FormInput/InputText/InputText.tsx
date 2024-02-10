import { InputText as InputTextType } from "../types";
import InputLayout from "../InputLayout";
import { InputText as PrimeInputText } from "primereact/inputtext";

export const InputText = (props: InputTextType) => {
  const { inputicon, label, required, visible, ...otherProps } = props;

  return (
    <InputLayout
      name={otherProps.name}
      inputicon={inputicon}
      label={label}
      required={required}
      visible={visible}
      disable={otherProps.disabled}
    >
      <PrimeInputText {...otherProps} />
    </InputLayout>
  );
};
