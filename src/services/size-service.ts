import { delay } from "@/utils/delay-utils";
import { OptionType } from "./pizza-service";

const sizes: OptionType[] = [
  {
    id: 1,
    name: "Pequena",
    price: 20.2,
    time: 15,
  },
  {
    id: 2,
    name: "Média",
    price: 30.3,
    time: 20,
  },
  {
    id: 3,
    name: "Grande",
    price: 40.0,
    time: 25,
  },
];

export const find = async (): Promise<OptionType[]> => {
  await delay(1000);
  return sizes;
};
