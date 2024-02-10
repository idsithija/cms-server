import { InputDropDown } from "../types";
import InputLayout from "../InputLayout";
import { Dropdown as PrimeDropDown } from "primereact/dropdown";

export const Dropdown = (props: InputDropDown) => {
  const { inputicon, label, required, visible, ...otherProps } = props;

  return (
    <InputLayout
      name={otherProps.name}
      inputicon={inputicon}
      label={label}
      required={required}
      visible={visible}
    >
      <PrimeDropDown {...otherProps} />
    </InputLayout>
  );
};
