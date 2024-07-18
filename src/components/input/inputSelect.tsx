import { useFormContext } from "react-hook-form";

type OptionType = {
  label: string;
  value: string | number;
};

export type InputSelectType = {
  name: string;
  options: OptionType[];
  required?: boolean;
};

export const InputSelect = ({ name, options, required }: InputSelectType) => {
  const { register } = useFormContext();

  return (
    <div
      className={`
          flex
          justify-between
          items-center
          rounded-lg
          border
          border-zinc-600
          text-white
          mt-1 p-4 max-h-10
        `}
    >
      <select
        className="w-full border-0 bg-transparent outline-0 text-white"
        {...register(name, {
          required,
        })}
      >
        <option value="" className="text-black">
          Selecione...
        </option>
        {options?.map((option, index) => (
          <option key={index} value={option.value} className="text-black">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
