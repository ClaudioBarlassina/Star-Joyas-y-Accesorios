import React from "react";
import logo from "../../assets/logo3.jpg";
import carrito from "../../assets/carrito.png";

import "./Menu.css";

function Menu() {
  return (
    <div className="navbar">
      <div className="logo-navbar">
        <img className="logo" src={logo} alt="" />
        <div className="titulo-menu">
          <h3>De Compras . Com</h3>
        </div>
      </div>
      <div className="menu-botones">
        <a href="">Productos</a>
        <a href="">Contacto</a>
        <a href=""></a>
      </div>
      <div className="menu-carrito">
        <img src={carrito} alt="" className="carrito" />
      </div>
      <div className="burger">
        <div className="span"></div>
        <div className="span"></div>
        <div className="span"></div>
      </div>
    </div>
  );
}

export default Menu;
