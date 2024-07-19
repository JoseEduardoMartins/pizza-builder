export type OptionType = {
  id: number;
  name: string;
  price: number;
  time: number;
};

export type PizzaType = {
  id: string;
  size: OptionType;
  flavor: OptionType;
  customizations: OptionType[];
  price: number;
  time: number;
};
