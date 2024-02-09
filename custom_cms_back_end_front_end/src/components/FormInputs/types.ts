import { CalendarBaseProps } from "primereact/calendar";
import { DropdownProps } from "primereact/dropdown";
import { InputNumberProps } from "primereact/inputnumber";
import { InputTextProps } from "primereact/inputtext";
import { MultiSelectProps } from "primereact/multiselect";

export enum InputTypes {
  Text = "Text",
  DropDown = "DropDown",
  Calendar = "Calendar",
  Number = "Number",
  MultiSelect = "MultiSelect",
}

export interface FieldBase {
  type: InputTypes;
  label?: string;
  disable?: boolean;
  required?: boolean;
  show?: boolean;
}

interface NamedField {
  name: string;
}

interface FieldText extends FieldBase, InputTextProps, NamedField {
  type: InputTypes.Text;
  name: string;
}

interface FieldNumber extends FieldBase, InputNumberProps, NamedField {
  type: InputTypes.Number;
  name: string;
}

interface FieldDropDown extends FieldBase, DropdownProps, NamedField {
  type: InputTypes.DropDown;
  name: string;
}

interface FieldCalendar extends FieldBase, CalendarBaseProps, NamedField {
  type: InputTypes.Calendar;
  name: string;
}

interface FieldMultiSelect extends FieldBase, MultiSelectProps, NamedField {
  type: InputTypes.MultiSelect;
  name: string;
}

export type FieldsProp =
  | FieldText
  | FieldDropDown
  | FieldCalendar
  | FieldNumber
  | FieldMultiSelect;
