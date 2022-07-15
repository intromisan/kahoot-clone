import React, { FC } from "react";

interface ButtonProps {
  text: string;
  icon?: string;
  onClick?: () => void;
  type?: "primary" | "secondary" | "outline";
}

const Button: FC<ButtonProps> = ({ text, icon, onClick, type }) => {
  return <div className="btn">{text}</div>;
};

export default Button;
