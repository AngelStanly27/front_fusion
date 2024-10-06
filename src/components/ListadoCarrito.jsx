import React, { useContext } from 'react'
import ItemCarrito from './ItemCarrito'
import CarritoContext from '../context/CarritoContext'
import './Tabla.scss'


const ListadoCarrito = () => {

  const{carrito, vaciarCarrito, guardarCarrito} =useContext(CarritoContext)

  const handleComprar = () =>{
      // Compra todos los productos en la pag del CARRito
    
    guardarCarrito(carrito)
    vaciarCarrito()
  }

  const handleLimpiarCarrito = () =>{
    vaciarCarrito()
    console.log('vaciando carrito')
  }



  return (
    <>
    <table className="tabla-alta">
        <thead>
                <tr>
                    <th className="nav-bar__nav-link">Foto</th>
                    <th className="nav-bar__nav-link" id="no_mostar">Nombre</th>
                    <th className="nav-bar__nav-link">Cantidad</th>
                    <th className="nav-bar__nav-link">Precio</th>
                    <th className="nav-bar__nav-link">Acción</th>
                </tr>
        </thead>

        <tbody>
            {   carrito.length <= 0 ? (
                <tr>
                    <td>No hay producto</td> 
                </tr>
            ) : (
                carrito.map((producto, idx) =>(
                    <ItemCarrito key={idx} producto={producto}/>
                ))
                )

            }
        </tbody>    
    </table>
        <hr />  

    {!carrito.length <= 0 && (

        <>
             <button className="form__enviar" onClick={handleLimpiarCarrito}>Vaciar Todo El Carrito</button>
             <button className="form__enviar"onClick={handleComprar}>Comrpar Todo el Carrito</button>

        </>
    )}
    

    </>
  )
}

export default ListadoCarrito