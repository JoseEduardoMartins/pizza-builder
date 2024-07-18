import { ChangeEventHandler } from "react";
import { InputSelect } from "./inputSelect";
import { InputCheckBox } from "./inputCheckbox";

type OptionType = {
  id: number;
  name: string;
};

type InputType = {
  label: string;
  type: "select" | "checkbox";
  onChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  options: OptionType[];
  isDisabled: boolean;
  isSelected: boolean;
};

export const Input = ({
  label,
  type,
  onChange,
  options,
  isDisabled,
  isSelected,
}: InputType) => (
  <div className="w-full flex flex-col gap-2">
    <label>{label}</label>
    {type === "select" && (
      <InputSelect
        onChange={onChange}
        options={options}
        isDisabled={isDisabled}
        isSelected={isSelected}
      />
    )}
    {type === "checkbox" && (
      <InputCheckBox
        onChange={onChange}
        options={options}
        isDisabled={isDisabled}
      />
    )}
  </div>
);
