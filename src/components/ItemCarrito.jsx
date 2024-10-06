import React, { useContext } from 'react'
import CarritoContext from '../context/CarritoContext'
import { useNavigate } from 'react-router'

import './Tabla.scss'

const ItemCarrito = ({producto}) => {

    const {carrito, eliminarCarritoContext, guardarCarrito} = useContext(CarritoContext)
    
    const navigate = useNavigate();

    const handleComprar = (id) =>{
      //comprra el Articulo deseado

      guardarCarrito(carrito)
      eliminarCarritoContext(id)
      navigate('/Comprando');

    }

    const handleEliminar =(id) =>{
        console.log('eliminano', id )
        eliminarCarritoContext(id)
    }

    const clickAumentar = ()=>{
      
      producto.cantidad++
      window.localStorage.setItem('carrito', JSON.stringify(carrito))
      location.reload()
    }
    
    const clickDisminuir = (id)=>{
      
      const remover = producto.cantidad--
      window.localStorage.setItem('carrito', JSON.stringify(carrito))
      
      location.reload()
      
      // console.log('recibo', remover)
      if(remover < 2){
        handleEliminar(id)
      }
    }

  return (
    <tr>
            <td><img src={producto.foto} alt={producto.nombre}
            className="img-row"/></td>

            <td id="no_mostar">{producto.nombre}</td>

            <td>
              <button id="sum-resta" onClick={() => clickDisminuir(producto.id)}> - </button>
              {producto.cantidad}
              <button id="sum-resta" onClick={() => clickAumentar()}> + </button>
            </td>

            <td>{producto.precio}</td>

            <td id="elim-comprar"> 
                <button className="para-button" onClick={() => handleEliminar(producto.id)}>Eliminar</button>
          
             <button className="para-button" onClick={handleComprar}>Comprar</button>
            </td>
    </tr>
  )
}

export default ItemCarrito