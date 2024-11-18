import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

import { Link } from 'react-router-dom';

const Details = () => {

  const location = useLocation();
  
  const { id } = useParams();
  const { datos } = location.state
 
  const dato = datos.find((item) => item.id === id)
  
  return (
    <div>
      <Link to={"/Home" }>
      
      <button>Volver</button>
      </Link>
      <h4>Detalle del Producto</h4>
      <img src={dato.image } alt=""  />
      <h2>{dato.nombre}</h2>
      <h4>{dato.material}</h4>
      <h4>{dato.categoria }</h4>
      <h4>{dato.precio}</h4>
      <p>{dato.Descripcion }</p>

        <button>Agregar al carrito</button>     

          
    </div>
  )
}

export default Details