import { useContext } from "react"
import useTitulo from "../hooks/useTitulo"
import CarritoContext from "../context/CarritoContext"
import ListadoCarrito from "../components/ListadoCarrito"
// import Carrito from './Carrito';

const Carrito = () => {

  useTitulo('Carrito')

  return (
    <>
      <h1>Productos en el Carrito</h1>
      
      <ListadoCarrito/>
    </>
  )
}

export default Carrito