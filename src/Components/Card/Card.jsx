import React from "react";
import "./Card.css";
import im from "../../assets/zapatillas.webp";

function Card() {
  return (
    <div className="conteiner-primario">
      <div className="ico">icono</div>
      <div className="conteiner-image">
        <img className="image" src={im} alt="" />
      </div>
      <div className="description">
        <h3>Producto</h3>
        <p className="descr-title">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
        </p>
        <div className="conteiner-color-impor">
          <div className="color">
            <h3 className="col"> Color:</h3>
            <input type="radio" name="Rojo" id="" />
            <input type="radio" name="Azul" id="" />
            <input type="radio" name="Gris" id="" />
          </div>
          <div className="cont-import">
            <h4 className="import">$09.00</h4>
          </div>
        </div>
        <div className="Conj-button">
          <button className="button">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
