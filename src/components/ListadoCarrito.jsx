import React, { useContext } from 'react'
import ItemCarrito from './ItemCarrito'
import CarritoContext from '../context/CarritoContext'
import './Tabla.scss'
import { useNavigate } from 'react-router'


const ListadoCarrito = () => {

  const{carrito, vaciarCarrito, guardarCarrito} =useContext(CarritoContext)

  const navigate = useNavigate()
  const handleComprar = () =>{
      // Compra todos los productos en la pag del CARRito
      
      guardarCarrito(carrito)
      vaciarCarrito()
      navigate('/Comprando');
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

    <div className="end">
        <ul className="flex-editar">
             <button className="end__bottom" onClick={handleLimpiarCarrito}>Vaciar Todo El Carrito</button>
        </ul>
        <ul className="flex-editar">
             <button className="end__bottom"onClick={handleComprar}>Comrpar Todo el Carrito</button>

         </ul>
    </div>
    )}
    

    </>
  )
}

export default ListadoCarrito