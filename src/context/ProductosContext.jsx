import { createContext, useEffect, useState } from "react";
import { helperPeticioneshttp } from "../helpers/helperPeticioneshttp";

// ! CREANDO CONTEXTO
// ! 1. Creamos el contexto
const ProductosContext = createContext()
// ! 2. Armamos el provider
const ProductosProvider = ( { children} ) => {
    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    const [productos, setProductos] = useState(null)
    const [productoAEditar, setProductoAEditar] = useState(null)

    useEffect(() => {
        getAllProductos()
    }, [])

    const getAllProductos = async () => {

        try {

            const prods = await helperPeticioneshttp(url, {})

            // console.log(prods)
            setProductos(prods)
            
        } catch (error) {
            console.error('[getAllProductos]', error)
        }
    }

    const crearProductoContext = async (nuevoProducto) => {

        try {
            // console.log(nuevoProducto)

            const options = {
                method: 'POST',
                headers: { 'content-type' : 'application/json' },
                body: JSON.stringify(nuevoProducto)
            }

            const newProducto = await helperPeticioneshttp(url, options)

            // console.log(newProducto)

            setProductos([...productos, newProducto])
            
        } catch (error) {
            console.error('[crearProductoContext]', error)
        }

    }

    const actualizarProductoContext = async (productoEditado) => {
        // console.log(productoEditado)
        try {

            const options = {
                method: 'PUT',
                headers: { 'content-type' : 'application/json' },
                body: JSON.stringify(productoEditado)
            }

            const urlEdicion = url + productoEditado.id
            // console.log('este es el url+id',urlEdicion)


            const editedProduct = await helperPeticioneshttp(urlEdicion, options)
            // console.log(editedProduct)

            const nuevoEstadoProductos = productos.map( 
                producto => producto.id === editedProduct.id ? editedProduct : producto
            )
            setProductos(nuevoEstadoProductos)
            
        } catch (error) {
            console.error('[actualizarProductoContext]', error)
        }
        
    }
    const productoAEliminar = async (id) => {
        const urlEliminar = url + id
        // console.log('este es url +id', urlEliminar)
        try {
    
          const options = {
            method: "DELETE",
          };
    
          await helperPeticioneshttp(urlEliminar, options);
    
          
        
    
          const EstadoProducto = productos.filter(
            (prod) => prod.id !== id);
          setProductos(EstadoProducto);
          
          }catch (error) {
            console.error('[productoAEliminar]',error)
          }
        }


    const data = {
        productos,
        crearProductoContext,
        actualizarProductoContext,
        productoAEditar,
        setProductoAEditar,
        productoAEliminar
    }

    return <ProductosContext.Provider value={data}>{ children }</ProductosContext.Provider>
}
// ! 3. Exportamos el contexto y provider

export { ProductosProvider }
export default ProductosContext