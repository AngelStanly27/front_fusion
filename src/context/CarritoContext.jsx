import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { helperPeticioneshttp } from "../helpers/helperPeticioneshttp";


const CarritoContext = createContext()

const CarritoProvider = ({children}) =>{

        const url = import.meta.env.VITE_BACKEND_CARRITOS

        const [aggAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito] = useLocalStorage('carrito', [])

        function existeElProducto(producto){
            
            const arrayProductoExiste = carrito.filter(prod => prod.id  === producto.id)
            return arrayProductoExiste.length
        }

        function obtenerProductos(producto){
            return carrito.find(prod => prod.id === producto.id)
        }
    const aggCarritoContext = (producto) =>{
        
        if (!existeElProducto(producto)) {
            producto.cantidad = 1
            aggAlCarrito(producto)
        } else {
            const productoDeCarrito = obtenerProductos(producto)
            productoDeCarrito.cantidad++
            window.localStorage.setItem('carrito', JSON.stringify(carrito))
        }
    }

    const eliminarCarritoContext = (id) => {

        // console.log(id)
        eliminarDelCarrito (id)

    }
    
    const vaciarCarrito = () =>{
        limpiarCarrito()
    }
    
    
    const guardarCarrito = async( carrito) =>{
    
    // console.log(JSON.stringify(carrito))
    try {
        
        const options = {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(carrito)
        }
        
        const losProductosEnElCarrito = await helperPeticioneshttp(url, options)
        
        // Extra: Crear una página de compra éxito. 
        console.log(losProductosEnElCarrito)
        
    } catch (error) {
        console.error('[guardarCarritoContext]', error)
    }

}
    
    
    
    
    const data ={
        carrito,
        aggCarritoContext,
        eliminarCarritoContext,
        guardarCarrito,
        vaciarCarrito 
    }
    return<CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export {CarritoProvider}
export default CarritoContext