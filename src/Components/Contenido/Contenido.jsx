import React from "react";
import "./Contenido.css";
import Card from "../Card/Card"
import contenido from "../../init/contenido.json"

function Contenido() {
  return (
    <div className="contenido-container">
        <h4>LO MAS BUSCADO</h4>
      <div className="Contenido-primary">
        {/* {contenido.map{

        }} */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
       
      </div>
    </div>
  );
}

export default Contenido;
