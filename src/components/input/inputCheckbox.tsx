import { useFormContext } from "react-hook-form";

type OptionType = {
  label: string;
  value: string | number;
};

export type CheckBoxType = {
  name: string;
  options: OptionType[];
  required?: boolean;
  dependencies?: Array<string>;
};

export const InputCheckBox = ({
  name,
  options,
  required,
  dependencies,
}: CheckBoxType) => {
  const { register, watch } = useFormContext();

  const values =
    dependencies && dependencies.length > 0 ? watch(dependencies) : [];

  const isDisabled =
    dependencies && dependencies.length > 0
      ? values.some((value) => !value)
      : false;

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
            disabled={isDisabled}
          />
          <label>{option.label}</label>
        </div>
      ))}
    </div>
  );
};
