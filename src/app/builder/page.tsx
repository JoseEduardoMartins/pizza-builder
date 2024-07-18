import { Customization } from "@/components/pizza/customization";
import { Flavor } from "@/components/pizza/flavor";
import { Size } from "@/components/pizza/size";
import { OrderSummary } from "@/components/pizza/summary";
import { Button } from "@/components/button";

export default function Builder() {
  return (
    <main className="w-full min-h-screen py-4 px-4">
      <div className="w-full max-w-xl m-auto flex flex-col items-center gap-y-6 mt-2">
        <a className="text-white text-2xl font-bold" href="/">
          Pizzaria
        </a>
        <div className="w-full pt-8 pb-10 px-6 md:px-10 border border-zinc-400 rounded-lg">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-white text-xl font-bold ">Monte sua Pizza</h2>
            <form className="flex flex-col gap-2">
              <Size />
              <Flavor />
              <Customization />
              <OrderSummary />

              <Button>Cadastrar</Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
