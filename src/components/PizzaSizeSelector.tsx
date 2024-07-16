"use client";

import { PizzaContext } from "@/contexts/PizzaContext";
import { ChangeEvent, useContext } from "react";

const sizes = [
  {
    id: 1,
    name: "Pequena",
    price: 20.2,
    prepTime: 15,
  },
  {
    id: 2,
    name: "Média",
    price: 30.3,
    prepTime: 20,
  },
  {
    id: 3,
    name: "Grande",
    price: 40.0,
    prepTime: 25,
  },
];

export const PizzaSizeSelector = () => {
  const { size, setSize } = useContext(PizzaContext);

  const handleSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const id = event.target.value;

    const [selectedSize] = sizes.filter((size) => size.id === Number(id));

    setSize(selectedSize.name);
  };

  return (
    <div className="mb-4">
      <label>Escolha o tamanho da pizza:</label>
      <select onChange={handleSizeChange}>
        <option disabled={!!size} value="0">
          Selecione...
        </option>
        {sizes?.map((size) => (
          <option key={size.id} value={size.id}>
            {size.name}
          </option>
        ))}
      </select>
    </div>
  );
};
