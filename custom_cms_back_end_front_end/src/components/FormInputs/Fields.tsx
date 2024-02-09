import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { MultiSelect } from "primereact/multiselect";
import { FieldsProp, InputTypes } from "./types";

const Fields = (props: FieldsProp) => {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      {props.type === InputTypes.Text && <InputText {...props} />}

      {props.type === InputTypes.DropDown && <Dropdown {...props} />}

      {props.type === InputTypes.Calendar && <Calendar {...props} />}

      {props.type === InputTypes.Number && <InputNumber {...props} />}

      {props.type === InputTypes.MultiSelect && <MultiSelect {...props} />}
    </>
  );
};

export default Fields;
