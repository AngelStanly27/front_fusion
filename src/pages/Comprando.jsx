import React from 'react'
import { NavLink } from 'react-router-dom';
import Carrito from './Carrito';

const Comprando = () => {
  return (
    <>
    <h1>Tu pedido ha sido procesado con éxito.</h1>
    <div className="end">
    <p id="Comprando">¡Gracias por tu compra!</p>
    </div>
  
  
    <div className="end">
     
      <ul className="end__buy-list">
         <NavLink to="/Carrito" className="end__bottom">Volver al Carrito</NavLink>
      </ul>

      <ul className="end__buy-list">
         <NavLink to="/" className="end__bottom">Volver a Inicio</NavLink>
      </ul>
    </div>

    </>
  )
}

export default Comprando