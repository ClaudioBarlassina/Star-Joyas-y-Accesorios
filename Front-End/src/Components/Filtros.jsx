import React from 'react'
import { useFilter } from '../Hook/useFilter'


const Filtros = () => {

  const { filters, setFilters } = useFilter();

  const HandlerCategorias = (e) => {
    setFilters(prevState => ({
    ...prevState, category:e.target.value
  }))
  }
  const HandlerMateriales = (e) => {
    setFilters(prevState => ({
       ...prevState, material:e.target.value
     }))
   }
  return (
    <div>
      <nav> 
        Filtrar
        <div> 
          <label htmlFor="category">Categorias </label>
          <select name="" id="category" onChange={HandlerCategorias}>
            <option value="all"> Todos</option>
            <option value="Anillo">Anillos</option>
            <option value="Cadena">Cadenas con Dijes</option>
            <option value="Rosario">Rosarios</option>
            <option value="">Piersing</option>
            <option value="Aros">Aros</option>
          </select>
         
        </div>
       <div> 
          <label htmlFor="">Materiales </label>
          <select name="" id="" onChange={HandlerMateriales}>
            <option value="all"> Todos</option>
            <option value="Acero Quirurgico">Acero Quirurgico</option>
            <option value="Acero Dorado">Acero Dorado</option>
            <option value="Acero Blanco">Acero Blanco</option>
            <option value="Otros"> Otros </option>
           
          </select>
       </div>
      </nav>        


    </div>
  )
}

export default Filtros