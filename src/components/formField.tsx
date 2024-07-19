import { FormFieldError } from "./formFieldError";
import { InputCheckBox } from "./input/inputCheckbox";
import { InputSelect } from "./input/inputSelect";
import { Option } from "@/utils/pizza-utils";

type FormFieldType = {
  label: string;
  name: string;
  type: "select" | "checkbox";
  options: Option[];
  required?: boolean;
  dependencies?: Array<string>;
};

export const FormField = ({
  label,
  name,
  type,
  options,
  required,
  dependencies,
}: FormFieldType) => (
  <div className="w-full flex flex-col gap-2">
    <div className="w-full flex flex-col">
      <label>{label}</label>
      {type === "select" && (
        <InputSelect
          name={name}
          options={options}
          required={required}
          dependencies={dependencies}
        />
      )}
      {type === "checkbox" && (
        <InputCheckBox
          name={name}
          options={options}
          required={required}
          dependencies={dependencies}
        />
      )}
    </div>
    <div>
      <FormFieldError name={name} />
    </div>
  </div>
);
