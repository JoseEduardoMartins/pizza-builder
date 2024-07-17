"use client";

import { PizzaContext, PizzaOptions } from "@/contexts/PizzaContext";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { find } from "@/services/size-service";

export const PizzaSizeSelector = () => {
  const { size, setSize } = useContext(PizzaContext);
  const [sizes, setSizes] = useState<PizzaOptions[]>([]);

  const handleSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const id = event.target.value;

    const [selectedSize] = sizes.filter((size) => size.id === Number(id));

    setSize(selectedSize);
  };

  const loadSizes = async () => {
    const response = await find();
    setSizes(response);
  };

  useEffect(() => {
    loadSizes();
  }, []);

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
