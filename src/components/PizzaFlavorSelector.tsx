"use client";

import { ChangeEvent, useContext } from "react";
import { PizzaContext } from "@/contexts/PizzaContext";

const flavors = [
  {
    id: 1,
    name: "Calabresa",
    price: 0,
    prepTime: 0,
  },
  {
    id: 2,
    name: "Marguerita",
    price: 0,
    prepTime: 0,
  },
  {
    id: 3,
    name: "Portuguesa",
    price: 0,
    prepTime: 5,
  },
];

export const PizzaFlavorSelector = () => {
  const { size, flavor, setFlavor } = useContext(PizzaContext);

  const handleFlavorChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const id = event.target.value;

    const [selectedFlavor] = flavors.filter(
      (flavor) => flavor.id === Number(id)
    );

    setFlavor(selectedFlavor.name);
  };

  return (
    <div className="mb-4">
      <label>Escolha o sabor da pizza:</label>
      <select onChange={handleFlavorChange} disabled={!size}>
        <option disabled={!!flavor} value="0">
          Selecione...
        </option>
        {flavors?.map((flavor) => (
          <option key={flavor.id} value={flavor.id}>
            {flavor.name}
          </option>
        ))}
      </select>
    </div>
  );
};
