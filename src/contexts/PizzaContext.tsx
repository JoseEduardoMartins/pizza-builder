"use client";

import { ReactNode, createContext, useLayoutEffect, useState } from "react";

export type PizzaOptions = {
  id: number;
  name: string;
  price: number;
  time: number;
};

type PizzaContextType = {
  size: PizzaOptions | null;
  setSize: (value: PizzaOptions | null) => void;
  flavor: PizzaOptions | null;
  setFlavor: (value: PizzaOptions) => void;
  customizations: Array<PizzaOptions>;
  setCustomizations: (value: Array<PizzaOptions>) => void;
  price: number;
  setPrice: (value: number) => void;
  time: number;
  setTime: (value: number) => void;
};

export const PizzaContext = createContext({} as PizzaContextType);

type PizzaProviderType = {
  children: ReactNode;
};

export const PizzaProvider = ({ children }: PizzaProviderType) => {
  const [size, setSize] = useState<PizzaOptions | null>(null);
  const [flavor, setFlavor] = useState<PizzaOptions | null>(null);
  const [customizations, setCustomizations] = useState<Array<PizzaOptions>>([]);
  const [price, setPrice] = useState<number>(0);
  const [time, setTime] = useState<number>(0);

  const calculatePrice = () => {
    const response =
      (size?.price || 0) +
      (flavor?.price || 0) +
      customizations.reduce((total, customization) => {
        return total + customization.price;
      }, 0);

    setPrice(response);
  };

  const calculateTime = () => {
    const response =
      (size?.time || 0) +
      (flavor?.time || 0) +
      customizations.reduce((total, customization) => {
        return total + customization.time;
      }, 0);

    setTime(response);
  };

  useLayoutEffect(() => {
    calculatePrice();
    calculateTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, flavor, customizations]);

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
        time,
        setTime,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};
