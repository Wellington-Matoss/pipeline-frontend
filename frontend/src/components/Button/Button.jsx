// Importações
import React from "react";
import "./Button.css"; // Importa o arquivo CSS para estilos do botão

const Button = ({ onClick, children, className, type = "button" }) => {
  return (
    <button className={`button ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
