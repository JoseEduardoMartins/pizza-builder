"use client";

import { ReactNode, createContext, useState } from "react";

type PizzaContextType = {
  size: string | null;
  setSize: (value: string | null) => void;
  flavor: string | null;
  setFlavor: (value: string) => void;
  customizations: Array<string>;
  setCustomizations: (value: Array<string>) => void;
  price: number;
  setPrice: (value: number) => void;
  prepTime: number;
  setPrepTime: (value: number) => void;
};

export const PizzaContext = createContext({} as PizzaContextType);

type PizzaProviderType = {
  children: ReactNode;
};

export const PizzaProvider = ({ children }: PizzaProviderType) => {
  const [size, setSize] = useState<string | null>(null);
  const [flavor, setFlavor] = useState<string | null>(null);
  const [customizations, setCustomizations] = useState<Array<string>>([]);
  const [price, setPrice] = useState<number>(0);
  const [prepTime, setPrepTime] = useState<number>(0);

  return (
    <PizzaContext.Provider
      value={{
        size,
        setSize,
        flavor,
        setFlavor,
        customizations,
        setCustomizations,
        price,
        setPrice,
        prepTime,
        setPrepTime,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};
