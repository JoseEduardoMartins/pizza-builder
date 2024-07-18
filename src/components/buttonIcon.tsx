import { ReactNode } from "react";

export type ButtonIconType = {
  type?: "submit" | "button";
  onClick?: () => void;
  children: ReactNode;
};

export const ButtonIcon = ({
  type = "submit",
  onClick,
  children,
}: ButtonIconType) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        p-2
        border
        border-transparent
        rounded-full
        bg-gray-900
        hover:bg-gray-600
        font-bold
        text-white
        text-button-lg
      "
    >
      {children}
    </button>
  );
};
