import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../Hook/useCart'


const Landing = () => {

  const { llamada,saludo, cart } = useCart()
  console.log(JSON.stringify(cart))

  return (
    <div>Landing
      <Link to={"/Home"}>
      
        <button >ingresar</button>
        <button onClick={() =>{ saludo()}}>Item</button>
     
      </Link>

    </div>
  )
}

export default Landing