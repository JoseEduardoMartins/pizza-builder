"use client";

import { PizzaContext, PizzaOptions } from "@/contexts/PizzaContext";
import { find } from "@/services/flavor-service";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Input } from "../input";

export const Flavor = () => {
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
    <Input
      label="Escolha o sabor da pizza:"
      type="select"
      onChange={handleFlavorChange}
      options={flavors}
      isDisabled={!size}
      isSelected={!!flavor}
    />
  );
};
