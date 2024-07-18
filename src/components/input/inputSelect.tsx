import { ChangeEventHandler } from "react";

type OptionType = {
  id: number;
  name: string;
};

type InputSelectType = {
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: OptionType[];
  isDisabled: boolean;
  isSelected: boolean;
};

export const InputSelect = ({
  onChange,
  options,
  isDisabled,
  isSelected,
}: InputSelectType) => (
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
      className="w-full border-0 bg-transparent outline-0"
      onChange={onChange}
      disabled={isDisabled}
    >
      <option className="bg-black" disabled={isSelected} value="0">
        Selecione...
      </option>
      {options?.map((options) => (
        <option className="bg-black" key={options.id} value={options.id}>
          {options.name}
        </option>
      ))}
    </select>
  </div>
);
