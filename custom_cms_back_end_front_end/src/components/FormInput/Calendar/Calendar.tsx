import { InputCalendar } from "../types";
import InputLayout from "../InputLayout";
import { Calendar as PrimeCalendar } from "primereact/calendar";

export const Calendar = (props: InputCalendar) => {
  const { inputicon, label, required, visible, ...otherProps } = props;

  return (
    <InputLayout
      name={otherProps.name}
      inputicon={inputicon}
      label={label}
      required={required}
      visible={visible}
    >
      <PrimeCalendar {...otherProps} />
    </InputLayout>
  );
};
