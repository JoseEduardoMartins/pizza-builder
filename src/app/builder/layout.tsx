import { PizzaProvider } from "@/contexts/PizzaContext";

export default function BuiderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PizzaProvider>{children}</PizzaProvider>;
}
