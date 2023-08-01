import Precios from '../models/precio.js'
import Categorias from '../models/categoria.js'

const admin = (req,res) =>{
    res.render('propiedades/admin',{
        tituloPagina:'Mis propiedades',
        barra:true
    })
}   

const crearPropiedad = async (req,res) =>{
    const[categorias,precios] = await Promise.all([
        Categorias.findAll(),
        Precios.findAll()
    ])
    res.render('propiedades/crear',{
        tituloPagina:'Crear Propiedad',
        barra:true,
        categorias, 
        precios
    })
}


export {
    admin, crearPropiedad
}