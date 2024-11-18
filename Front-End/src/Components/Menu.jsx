import React from 'react'
import Filtros from "../Components/Filtros"
import logo from "../Utils/logo.jpg"
import carrito from "../Utils/carrito.png"
import "../Components/Menu.css"

const Menu = () => {
  return (
    <div className='conteiner'> 
    
      <img className="logo"src={logo } alt="" />
      <Filtros />
      <img src={carrito} className="carrito" alt="" />
      <span className='numero-carrito'>1</span>
    </div>
  )
}

export default Menu