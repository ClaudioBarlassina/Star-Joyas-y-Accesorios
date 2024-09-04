import React from "react";
import "./Contenido.css";
import Card from "../Card/Card";
import contenido from "../../init/contenido.json";

function Contenido() {
  return (
    <div className="contenido-container">
      <div className="Contenido-primary">
        {contenido.map((item, index) => (
          <span key={index}>
            <Card
              Nombre={item.Nombre}
              Imagen={item.Image}
              Descripcion={item.Descripcion}
              Import={item.import}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Contenido;
