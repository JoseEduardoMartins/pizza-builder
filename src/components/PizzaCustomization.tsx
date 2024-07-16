"use client";

import { ChangeEvent, useContext } from "react";
import { PizzaContext } from "@/contexts/PizzaContext";

export const PizzaCustomization = () => {
  const {
    customizations,
    setCustomizations,
    price,
    setPrice,
    prepTime,
    setPrepTime,
  } = useContext(PizzaContext);

  const handleCustomizationChange = (event: ChangeEvent<HTMLInputElement>) => {
    const customization = event.target.value;
    const isChecked = event.target.checked;

    let newPrice = price;
    let newPrepTime = prepTime;

    if (isChecked) {
      if (customization === "extraBacon") {
        newPrice += 3;
      } else if (customization === "bordaRecheada") {
        newPrice += 5;
        newPrepTime += 5;
      }

      setCustomizations([...customizations, customization]);
    } else {
      if (customization === "extraBacon") {
        newPrice -= 3;
      } else if (customization === "bordaRecheada") {
        newPrice -= 5;
        newPrepTime -= 5;
      }

      setCustomizations(
        customizations.filter((item) => item !== customization)
      );
    }

    setPrice(newPrice);
    setPrepTime(newPrepTime);
  };

  return (
    <div className="mb-4">
      <label>Personalize sua pizza:</label>
      <div>
        <input
          type="checkbox"
          id="extraBacon"
          value="extraBacon"
          onChange={handleCustomizationChange}
        />
        <label>Extra bacon (+R$ 3,00)</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="semCebola"
          value="semCebola"
          onChange={handleCustomizationChange}
        />
        <label>Sem cebola</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="bordaRecheada"
          value="bordaRecheada"
          onChange={handleCustomizationChange}
        />
        <label>Borda recheada (+R$ 5,00 e +5 minutos)</label>
      </div>
    </div>
  );
};
