import React from "react";
import "./Card.css";
import im from "../../assets/zapatillas.webp";

function Card({Nombre, Descripcion, Imagen, Import }) {
  return (
    <div className="conteiner-primario">
      <div className="ico">icono</div>
      <div className="conteiner-image">
        <img className="image" src={Imagen} alt="" />
      </div>
      <div className="description">
        <h3>{ Nombre}</h3>
        <p className="descr-title">{Descripcion
        }
        </p>
        <div className="conteiner-color-impor">
          <div className="color">
            <h3 className="col"> Color:</h3>
            <input type="radio" name="Rojo" id="" />
            <input type="radio" name="Azul" id="" />
            <input type="radio" name="Gris" id="" />
          </div>
          <div className="cont-import">
            <h4 className="import">{Import}</h4>
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
