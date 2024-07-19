import { OptionType } from "../services/pizza-service";

export type Option = {
  label: string;
  value: number;
};

export const buildOption = (options: OptionType[]): Option[] =>
  options.map((option) => ({
    label: option.name,
    value: option.id,
  }));
