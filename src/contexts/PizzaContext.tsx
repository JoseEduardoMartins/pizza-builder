"use client";

import { ReactNode, createContext, useLayoutEffect, useState } from "react";
import { generateRandomText } from "@/utils/string-utils";

export type PizzaOptions = {
  id: number;
  name: string;
  price: number;
  time: number;
};

export type PizzaContextType = {
  id?: string;
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
  const [id, setId] = useState<string>();
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

  useLayoutEffect(() => {
    const response = generateRandomText(6, "123456789");
    setId(response);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PizzaContext.Provider
      value={{
        id,
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
