import { useFormContext } from "react-hook-form";

type OptionType = {
  label: string;
  value: string | number;
};

export type CheckBoxType = {
  name: string;
  options: OptionType[];
  required?: boolean;
};

export const InputCheckBox = ({ name, options, required }: CheckBoxType) => {
  const { register } = useFormContext();

  return (
    <div className="w-full flex flex-col gap-1">
      {options?.map((option, index) => (
        <div className="flex flex-row gap-2 items-center" key={index}>
          <input
            className="h-4 w-4 text-blue-500 border-2 border-gray-300 rounded transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 checked:bg-blue-500 checked:border-transparent"
            type="checkbox"
            {...register(name, {
              required,
            })}
            value={option.value}
          />
          <label>{option.label}</label>
        </div>
      ))}
    </div>
  );
};
