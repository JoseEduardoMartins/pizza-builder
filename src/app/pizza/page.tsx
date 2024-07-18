"use client";

import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { FormField } from "@/components/formField";
import { Link } from "@/components/link";
import { usePizza } from "./usePizza";

export default function Pizza() {
  const { methods, handleSubmit, sizes, flavors, customizations } = usePizza();

  return (
    <main className="w-full min-h-screen py-4 px-4">
      <div className="w-full max-w-xl m-auto flex flex-col items-center gap-y-6 mt-2">
        <Link href="/" theme="white" size="big">
          Pizzaria
        </Link>
        <div className="w-full pt-8 pb-10 px-6 md:px-10 border border-zinc-400 rounded-lg">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-white text-xl font-bold ">Monte sua Pizza</h2>
            <Form methods={methods} handleSubmit={handleSubmit}>
              <FormField
                label="Escolha o tamanho da pizza:"
                name="size"
                type="select"
                required={true}
                options={sizes}
              />
              <FormField
                label="Escolha o sabor da pizza:"
                name="flavor"
                type="select"
                required={true}
                options={flavors}
              />
              <FormField
                label="Personalize sua pizza:"
                name="customizations"
                type="checkbox"
                required={false}
                options={customizations}
              />
              <Button>Salvar</Button>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
}
