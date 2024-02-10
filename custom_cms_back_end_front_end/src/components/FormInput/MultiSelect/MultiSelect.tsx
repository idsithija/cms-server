import { InputMultiSelect } from "../types";
import InputLayout from "../InputLayout";
import { MultiSelect as PrimeMultiSelect } from "primereact/multiselect";

export const MultiSelect = (props: InputMultiSelect) => {
  const { inputicon, label, required, visible, ...otherProps } = props;

  return (
    <InputLayout
      name={otherProps.name}
      inputicon={inputicon}
      label={label}
      required={required}
      visible={visible}
    >
      <PrimeMultiSelect {...otherProps} />
    </InputLayout>
  );
};
