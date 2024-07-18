import { ChangeEventHandler } from "react";

type OptionType = {
  id: number;
  name: string;
};

type InputCheckBoxType = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  options: OptionType[];
  isDisabled: boolean;
};

export const InputCheckBox = ({
  onChange,
  options,
  isDisabled,
}: InputCheckBoxType) => (
  <div className="w-full flex flex-col gap-1">
    {options?.map((option) => (
      <div className="flex flex-row gap-2 items-center" key={option.id}>
        <input
          className="h-4 w-4 text-blue-500 border-2 border-gray-300 rounded transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 checked:bg-blue-500 checked:border-transparent"
          type="checkbox"
          value={option.id}
          onChange={onChange}
          disabled={isDisabled}
        />
        <label>{option.name}</label>
      </div>
    ))}
  </div>
);
