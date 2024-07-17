"use client";

import { PizzaContext, PizzaOptions } from "@/contexts/PizzaContext";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { find } from "@/services/flavor-service";

export const PizzaFlavorSelector = () => {
  const { size, flavor, setFlavor } = useContext(PizzaContext);
  const [flavors, setFlavors] = useState<PizzaOptions[]>([]);

  const handleFlavorChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const id = event.target.value;

    const [selectedFlavor] = flavors.filter(
      (flavor) => flavor.id === Number(id)
    );

    setFlavor(selectedFlavor);
  };

  const loadFlavors = async () => {
    const response = await find();
    setFlavors(response);
  };

  useEffect(() => {
    loadFlavors();
  }, []);

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
