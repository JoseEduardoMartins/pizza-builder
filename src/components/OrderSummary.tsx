"use client";

import { useContext } from "react";
import { PizzaContext } from "@/contexts/PizzaContext";

export const OrderSummary = () => {
  const { size, flavor, customizations, price, time } =
    useContext(PizzaContext);

  return (
    <div className="mt-4 p-4 border rounded">
      <h2>Resumo do Pedido</h2>
      <p>Tamanho: {size?.name}</p>
      <p>Sabor: {flavor?.name}</p>
      <p>
        Personalizações:{" "}
        {customizations.map((customization) => customization.name).join(", ") ||
          "Nenhuma"}
      </p>
      <p>Preço Total: R$ {price.toFixed(2)}</p>
      <p>Tempo de Preparo: {time} minutos</p>
    </div>
  );
};
