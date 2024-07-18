"use client";

import { PizzaContext, PizzaOptions } from "@/contexts/PizzaContext";
import { find } from "@/services/customization-service";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Input } from "../input";

export const Customization = () => {
  const { flavor, customizations, setCustomizations } =
    useContext(PizzaContext);
  const [personalizations, setPersonalizations] = useState<PizzaOptions[]>([]);

  const handleCustomizationChange = (event: ChangeEvent<HTMLInputElement>) => {
    const id = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      const [prosonalization] = personalizations.filter(
        (customization) => customization.id === Number(id)
      );

      setCustomizations([...customizations, prosonalization]);
    } else {
      const restProsonalizations = customizations.filter(
        (customization) => customization.id !== Number(id)
      );

      setCustomizations(restProsonalizations);
    }
  };

  const loadCustomizations = async () => {
    const response = await find();
    setPersonalizations(response);
  };

  useEffect(() => {
    loadCustomizations();
  }, []);

  return (
    <Input
      label="Personalize sua pizza:"
      type="checkbox"
      onChange={handleCustomizationChange}
      options={personalizations}
      isDisabled={!flavor}
      isSelected={false}
    />
  );
};
