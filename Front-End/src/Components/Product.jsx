import React from "react";
import "../Components/Product.css";
import { Link } from "react-router-dom";
import { useFilter } from "../Hook/useFilter";

const Product = ({ data }) => {

  const {filters} = useFilter()
  return (
    <div className="contenedor-product">
      
      {/* {JSON.stringify(filters)} */}
      {/* <h2>PRODUCTOS:   {filters.category}</h2>
      <h2>MATERIAL:  {filters.material }</h2> */}
      {data.map(item => (
        <li key={item.id} className="items-Product">
          <div>
            <Link to={`/details/${item.id}`} state={{datos:data}}>
              <img src={item.image} alt="" className="img-item-product" />
            </Link>
          </div>
          
          <div className="items-datos">
            <h3 className="nombre">{item.nombre}</h3>
          
           <h5 className="precio"> $ {item.precio}</h5> 
          </div> 
          <button>Agregar al carrito</button>
        </li>

      ))}
    </div>
  );
};

export default Product;
