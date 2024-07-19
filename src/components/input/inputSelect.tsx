import { useFormContext } from "react-hook-form";
import { Option } from "@/utils/pizza-utils";

type InputSelectType = {
  name: string;
  options: Option[];
  required?: boolean;
  dependencies?: Array<string>;
};

export const InputSelect = ({
  name,
  options,
  required,
  dependencies,
}: InputSelectType) => {
  const { register, watch } = useFormContext();

  const values =
    dependencies && dependencies.length > 0 ? watch(dependencies) : [];

  const isDisabled =
    dependencies && dependencies.length > 0
      ? values.some((value) => !value)
      : false;

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
        disabled={isDisabled}
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
