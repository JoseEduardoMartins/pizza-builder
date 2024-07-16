import { PizzaProvider } from "@/contexts/PizzaContext";
import { OrderSummary } from "./OrderSummary";
import { PizzaCustomization } from "./PizzaCustomization";
import { PizzaFlavorSelector } from "./PizzaFlavorSelector";
import { PizzaSizeSelector } from "./PizzaSizeSelector";

const PizzaBuilder = () => (
  <PizzaProvider>
    <div>
      <PizzaSizeSelector />
      <PizzaFlavorSelector />
      <PizzaCustomization />
      <OrderSummary />
    </div>
  </PizzaProvider>
);

export default PizzaBuilder;
