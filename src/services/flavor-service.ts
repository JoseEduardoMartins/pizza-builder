import { PizzaOptions } from "@/contexts/PizzaContext";
import { delay } from "@/utils/delay-utils";

const flavors: PizzaOptions[] = [
  {
    id: 1,
    name: "Calabresa",
    price: 0,
    time: 0,
  },
  {
    id: 2,
    name: "Marguerita",
    price: 0,
    time: 0,
  },
  {
    id: 3,
    name: "Portuguesa",
    price: 0,
    time: 5,
  },
];

export const find = async (): Promise<PizzaOptions[]> => {
  await delay(1000);
  return flavors;
};
