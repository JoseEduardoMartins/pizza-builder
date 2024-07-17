"use client";

import { PizzaContext, PizzaOptions } from "@/contexts/PizzaContext";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { find } from "@/services/customization-service";

export const PizzaCustomization = () => {
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
    <div className="mb-4">
      <label>Personalize sua pizza:</label>
      {personalizations?.map((prosonalization) => (
        <div key={prosonalization.id}>
          <input
            type="checkbox"
            value={prosonalization.id}
            onChange={handleCustomizationChange}
            disabled={!flavor}
          />
          <label>{prosonalization.name}</label>
        </div>
      ))}
    </div>
  );
};
