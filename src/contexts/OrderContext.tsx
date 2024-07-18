"use client";

import { ReactNode, createContext, useLayoutEffect, useState } from "react";
import { PizzaContextType } from "./PizzaContext";

export type OrderContextTpe = {
  items: PizzaContextType[];
  price: number;
  time: number;
  addItem: (item: PizzaContextType) => void;
  editItem: (item: PizzaContextType) => void;
  removeItem: (item: PizzaContextType) => void;
};

export const OrderContext = createContext({} as OrderContextTpe);

export type OrderProviderType = {
  children: ReactNode;
};

export const OrderProvider = ({ children }: OrderProviderType) => {
  const [items, setItems] = useState<PizzaContextType[]>([]);
  const [price, setPrice] = useState<number>(0);
  const [time, setTime] = useState<number>(0);

  const addItem = (data: PizzaContextType) => setItems([...items, data]);

  const editItem = (data: PizzaContextType) => {
    const response = items?.map((item) => (item.id === data.id ? data : item));
    setItems(response);
  };

  const removeItem = (data: PizzaContextType) => {
    const response = items?.filter((item) => item.id !== data.id);
    setItems(response);
  };

  const calculatePrice = () => {
    const response = items.reduce((total, item) => {
      return total + item.price;
    }, 0);

    setPrice(response);
  };

  const calculateTime = () => {
    const response = items.reduce((total, item) => {
      return total + item.time;
    }, 0);

    setTime(response);
  };

  useLayoutEffect(() => {
    calculatePrice();
    calculateTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <OrderContext.Provider
      value={{
        items,
        price,
        time,
        addItem,
        editItem,
        removeItem,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
