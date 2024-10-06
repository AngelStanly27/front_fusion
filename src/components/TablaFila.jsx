import { useContext } from 'react'
import ProductosContext from '../context/ProductosContext'
import { notificacionSweet } from "./TablaFila.service";
import './TablaFila.scss'

const TablaFila = ({producto, productoAEliminar}) => {

  const {setProductoAEditar}=useContext(ProductosContext);

  const handleEditar = (producto) => {
    // console.log('Producto a editar...', producto.id)
      setProductoAEditar(producto)
  }

  const handleBorrar = (producto) => {
  // console.log('Producto a elimi...', producto.id)
  notificacionSweet(() => {
    productoAEliminar(producto.id)
  })
  
  }

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td id="no_mostar">{producto.stock}</td>
      <td id="no_mostar">{producto.marca}</td>
      <td id="no_mostar">{producto.categoria}</td>

      <td>
        <img src={producto.foto} alt={producto.nombre} className="img-row" />
      </td>
      
      <td id="no_mostar">{producto.envio ? 'Si':'No'}</td>

      <td id="elim-comprar">
        <button className="para-button" onClick={() => handleEditar(producto)}>Editar</button>
        <button className="para-button" onClick={() => handleBorrar(producto)}>Borrar</button>
      </td>

    </tr>
  )
}

export default TablaFila

