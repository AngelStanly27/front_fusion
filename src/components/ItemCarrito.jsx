import React, { useContext } from 'react'
import CarritoContext from '../context/CarritoContext'
import './Tabla.scss'


const ItemCarrito = ({producto}) => {

    const {carrito, eliminarCarritoContext, guardarCarrito} = useContext(CarritoContext)

    const handleComprar = (id) =>{
      //comprra el Articulo deseado

      guardarCarrito(carrito)
      eliminarCarritoContext(id)

  
    }

    const handleEliminar =(id) =>{
        console.log('eliminano', id )
        eliminarCarritoContext(id)
    }
  return (
    <tr>
            <td><img src={producto.foto} alt={producto.nombre}
            className="img-row"/></td>

            <td id="no_mostar">{producto.nombre}</td>

            <td>
              <button> - </button>
              {producto.cantidad}
              <button> + </button>
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