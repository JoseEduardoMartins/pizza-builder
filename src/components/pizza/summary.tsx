"use client";

import { useContext } from "react";
import { PizzaContext } from "@/contexts/PizzaContext";

export const OrderSummary = () => {
  const { size, flavor, customizations, price, time } =
    useContext(PizzaContext);

  return (
    <div className="mt-4 pt-4 border-t flex flex-col gap-2">
      <h2 className="text-white text-xl font-bold ">Resumo</h2>
      <div>
        <p>Tamanho: {size?.name}</p>
        <p>Sabor: {flavor?.name}</p>
        <p>
          Personalizações:{" "}
          {customizations
            .map((customization) => customization.name)
            .join(", ") || "Nenhuma"}
        </p>
        <p>Preço Total: R$ {price.toFixed(2)}</p>
        <p>Tempo de Preparo: {time} minutos</p>
      </div>
    </div>
  );
};
