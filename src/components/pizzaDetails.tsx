import { PizzaType, OrderContext } from "@/contexts/OrderContext";
import { ButtonIcon } from "./buttonIcon";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";

type PizzaDetailsType = {
  index: number;
  item: PizzaType;
};

export const PizzaDetails = ({ index, item }: PizzaDetailsType) => {
  const { removeItem } = useContext(OrderContext);

  return (
    <div className="mtb-4 pt-4 border-t flex flex-col gap-2">
      <h2 className="text-white text-xl font-bold flex flex-row justify-between items-center">
        Pizza {index + 1} - #{item.id}
        <ButtonIcon onClick={() => removeItem(item)}>
          <MdDelete />
        </ButtonIcon>
      </h2>
      <div>
        <p>Tamanho: {item.size.name}</p>
        <p>Sabor: {item.flavor.name}</p>
        <p>
          Personalizações:{" "}
          {item.customizations
            .map((customization) => customization.name)
            .join(", ") || "Nenhuma"}
        </p>
        <p>Preço Total: R$ {item.price.toFixed(2)}</p>
        <p>Tempo de Preparo: {item.time} minutos</p>
      </div>
    </div>
  );
};
