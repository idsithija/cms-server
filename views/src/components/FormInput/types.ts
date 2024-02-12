import { CalendarBaseProps } from "primereact/calendar";
import { DropdownProps } from "primereact/dropdown";
import { InputNumberProps } from "primereact/inputnumber";
import { InputTextProps } from "primereact/inputtext";
import { MultiSelectProps } from "primereact/multiselect";
import { PasswordProps } from "primereact/password";
import { ReactNode } from "react";

interface InputBase {
  inputicon: ReactNode;
  label?: string;
  required?: boolean;
  visible?: boolean;
}

export interface InputText extends InputBase, InputTextProps {
  name: string;
}

export interface InputNumber extends InputBase, InputNumberProps {
  name: string;
}

export interface InputDropDown extends InputBase, DropdownProps {
  name: string;
}

export interface InputCalendar extends InputBase, CalendarBaseProps {
  name: string;
}

export interface InputMultiSelect extends InputBase, MultiSelectProps {
  name: string;
}

export interface InputPassword extends InputBase, PasswordProps {
  name: string;
}
