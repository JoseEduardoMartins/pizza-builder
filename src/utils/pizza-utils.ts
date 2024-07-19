import { OptionType } from "../services/pizza-service";

export type Options = {
  label: string;
  value: number;
};

export const buildOption = (options: OptionType[]): Options[] =>
  options.map((option) => ({
    label: option.name,
    value: option.id,
  }));
