import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

import { Link } from 'react-router-dom';
import "../Components/Details.css"

const Details = () => {

  const location = useLocation();
  
  const { id } = useParams();
  const { datos } = location.state
 
  const dato = datos.find((item) => item.id === id)
  
  return (
    <div className='conteiner-general'>
      <div className='details-organizacion'>

      <Link to={"/Home" }>
      
      <button>Volver</button>
      </Link>
      <h4 className='details-titulo'>Detalle del Producto</h4>
      </div>
      
      <div className='details-conteiner'>
      <img src={dato.image } alt="" className='details-img'  />
      <h2 className='details-nombre'>{dato.nombre}</h2>
      <h4 className="details-material">Material: {dato.material}</h4>
      <h4 className='details-categoria'>Categoria: {dato.categoria }</h4>
      <h4 className='details-precio'> $ {dato.precio}</h4>
      <p className='details-descripcion'>{dato.Descripcion }</p>

        <button>Agregar al carrito</button>     

        </div>   
    </div>
  )
}

export default Details