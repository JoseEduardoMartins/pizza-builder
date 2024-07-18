import { z } from "zod";
import { pizzaSchema } from "./schemas";

export type PizzaType = z.infer<typeof pizzaSchema>;
