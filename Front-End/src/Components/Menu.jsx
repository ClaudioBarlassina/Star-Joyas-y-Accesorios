import React from "react";
import Filtros from "../Components/Filtros";

import carrito from "../Utils/carrito.png";
import "../Components/Menu.css";

const Menu = () => {
  return (
    <div className="conteiner">
      <div className="gru-1 ">
        <div className="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <h3 className="titulo">Star</h3>
          <h4 className="titulo2">Joyas y Accesorios</h4>
        </div>
      </div>
      <div className="filtros">
        <Filtros />
      </div>
      <div className="logoCarrito">
        <img src={carrito} className="carrito" alt="" />
        <span className="numero-carrito">1</span>
      </div>
    </div>
  );
};

export default Menu;
