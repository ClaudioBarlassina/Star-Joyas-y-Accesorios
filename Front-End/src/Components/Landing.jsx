import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../Hook/useCart'
import portada from "../Utils/portada-web-676x1024.webp"
import Menu from "../Components/Menu"
const Landing = () => {




  return (
    <div>

    <Menu/>
      <img src={portada } alt="" />
      <Link to={"/Home"}>
        <button >ingresar</button>
       
     
      </Link>

    </div>
  )
}

export default Landing