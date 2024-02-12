import { InputNumber as InputNumberType } from "../types";
import InputLayout from "../InputLayout";
import { InputNumber as PrimeInputNumber } from "primereact/inputnumber";

export const InputNumber = (props: InputNumberType) => {
  const { inputicon, label, required, visible, ...otherProps } = props;

  return (
    <InputLayout
      name={otherProps.name}
      inputicon={inputicon}
      label={label}
      required={required}
      visible={visible}
    >
      <PrimeInputNumber {...otherProps} />
    </InputLayout>
  );
};
