import { delay } from "@/utils/delay-utils";
import { OptionType } from "./pizza-service";

const customizations: OptionType[] = [
  {
    id: 1,
    name: "Extra bacon (+R$ 3,00)",
    price: 3,
    time: 0,
  },
  {
    id: 2,
    name: "Sem cebola",
    price: 0,
    time: 0,
  },
  {
    id: 3,
    name: "Borda recheada (+R$ 5,00 e +5 minutos)",
    price: 5,
    time: 5,
  },
];

export const find = async (): Promise<OptionType[]> => {
  await delay(1000);
  return customizations;
};
