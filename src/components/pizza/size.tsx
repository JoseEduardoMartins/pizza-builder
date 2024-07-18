"use client";

import { PizzaContext, PizzaOptions } from "@/contexts/PizzaContext";
import { find } from "@/services/size-service";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Input } from "../input";

export const Size = () => {
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
    <Input
      label="Escolha o tamanho da pizza:"
      type="select"
      onChange={handleSizeChange}
      options={sizes}
      isDisabled={false}
      isSelected={!!size}
    />
  );
};
