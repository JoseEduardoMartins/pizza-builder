"use client";

import { Button } from "@/components/button";
import { OrderContext } from "@/contexts/OrderContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function Home() {
  const router = useRouter();
  const { items, price, time } = useContext(OrderContext);

  return (
    <main className="w-full min-h-screen py-4 px-4">
      <div className="w-full max-w-xl m-auto flex flex-col items-center gap-y-6 mt-2">
        <a className="text-white text-2xl font-bold" href="/">
          Pizzaria
        </a>
        <div className="w-full pt-8 pb-10 px-6 md:px-10 border border-zinc-400 rounded-lg">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-white text-xl font-bold ">Pedido</h2>
            {!items.length && (
              <div className="mt-4 pt-4 border-t flex flex-col gap-2">
                <h4>Nenhuma pizza no seu pedido</h4>
              </div>
            )}
            <div className="mt-4 pt-4 border-t flex flex-col gap-2">
              <h2 className="text-white text-xl font-bold ">resumo</h2>
              <div>
                <p>Preço Total: R$ {price.toFixed(2)}</p>
                <p>Tempo de Preparo: {time} minutos</p>
              </div>
            </div>
            <Button onClick={() => router.push("/builder")}>Adicionar</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
