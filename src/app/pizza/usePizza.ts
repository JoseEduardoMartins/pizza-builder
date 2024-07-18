import { OptionType, OrderContext } from "@/contexts/OrderContext";
import { find as findCustomization } from "@/services/customization-service";
import { find as findFlavor } from "@/services/flavor-service";
import { find as findSize } from "@/services/size-service";
import { generateRandomText } from "@/utils/string-utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { pizzaSchema } from "./schemas";
import { PizzaType } from "./types";

type Options = {
  label: string;
  value: number;
};

export const usePizza = () => {
  const router = useRouter();
  const { addItem } = useContext(OrderContext);

  const [sizes, setSizes] = useState<OptionType[]>([]);
  const [flavors, setFlavors] = useState<OptionType[]>([]);
  const [customizations, setCustomizations] = useState<OptionType[]>([]);

  const methods = useForm<PizzaType>({
    resolver: zodResolver(pizzaSchema),
    defaultValues: {
      size: 0,
      flavor: 0,
      customizations: [],
    },
  });

  const handleSubmit = async (data: PizzaType) => {
    try {
      const size = sizes.find((size) => size.id === data.size);
      if (!size) return;

      const flavor = flavors.find((flavor) => flavor.id === data.flavor);
      if (!flavor) return;

      let customizationList: OptionType[] = [];

      if (data.customizations?.length) {
        const response = data.customizations
          .map((id) => customizations.find((option) => option.id === id))
          .filter((option) => option !== undefined);

        customizationList = response;
      }

      const pizza = {
        id: generateRandomText(6, "123456789"),
        size,
        flavor,
        customizations: customizationList,
        price:
          (size?.price || 0) +
          (flavor?.price || 0) +
          customizationList.reduce((total, customization) => {
            return total + customization.price;
          }, 0),
        time:
          (size?.time || 0) +
          (flavor?.time || 0) +
          customizationList.reduce((total, customization) => {
            return total + customization.time;
          }, 0),
      };

      addItem(pizza);

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const buildOption = (options: OptionType[]): Options[] =>
    options.map((option) => ({
      label: option.name,
      value: option.id,
    }));

  const loadSizes = async () => {
    const response = await findSize();
    setSizes(response);
  };

  const loadFlavors = async () => {
    const response = await findFlavor();
    setFlavors(response);
  };

  const loadCustomizations = async () => {
    const response = await findCustomization();
    setCustomizations(response);
  };

  useEffect(() => {
    loadSizes();
    loadFlavors();
    loadCustomizations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    methods,
    handleSubmit,
    sizes: buildOption(sizes),
    flavors: buildOption(flavors),
    customizations: buildOption(customizations),
  };
};
