import LinkNext from "next/link";
import { ReactNode } from "react";

const themeClass = {
  white: " text-white",
  emerald: " text-emerald-500",
};

const sizeClass = {
  small: " text-sm",
  average: " text-lg",
  big: " text-2xl",
};

export type LinkType = {
  href: string;
  theme?: "white" | "emerald";
  size?: "small" | "average" | "big";
  children: ReactNode;
};

export const Link = ({
  href,
  theme = "white",
  size = "average",
  children,
}: LinkType) => (
  <LinkNext
    className={`
      font-bold
      hover:cursor-pointer
      hover:underline
      ${themeClass[theme]}
      ${sizeClass[size]}
    `}
    href={href}
  >
    {children}
  </LinkNext>
);
