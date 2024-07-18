"use client";

import { Link } from "@/components/link";
import { OrderDetails } from "@/components/orderDetails";
import { PizzaDetails } from "@/components/pizzaDetails";
import { OrderContext } from "@/contexts/OrderContext";
import { useContext } from "react";

export default function Home() {
  const { items, price, time } = useContext(OrderContext);

  return (
    <main className="w-full min-h-screen py-4 px-4">
      <div className="w-full max-w-xl m-auto flex flex-col items-center gap-y-6 mt-2">
        <Link href="/" theme="white" size="big">
          Pizzaria
        </Link>
        <div className="w-full pt-8 pb-10 px-6 md:px-10 border border-zinc-400 rounded-lg">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-white text-xl font-bold flex flex-row justify-between items-center">
              Pedido
              <Link href="/pizza" theme="emerald" size="small">
                Adicionar
              </Link>
            </h2>
            {items?.map((item, index) => (
              <PizzaDetails key={index} index={index} item={item} />
            ))}
            {items.length ? (
              <OrderDetails price={price} time={time} />
            ) : (
              <div className="mt-4 pt-4 border-t flex flex-col gap-2 text-center">
                <h4>Nenhuma pizza no seu pedido</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
