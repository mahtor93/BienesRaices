//import Precios from '../models/precio.model.js'
import { validationResult } from 'express-validator'
//import Categorias from '../models/categoria.model.js'
import { Propiedad, Precios,Categorias } from '../models/index.model.js';
//import Propiedad from '../models/propiedad.model.js'

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
        csrfToken: req.csrfToken(),
        barra:true,
        categorias, 
        precios,
        propiedad:{}
    })
}

const guardarPropiedad = async(req,res) =>{

    let resultado = validationResult(req);
    if(!resultado.isEmpty()){
        const[categorias,precios] = await Promise.all([
            Categorias.findAll(),
            Precios.findAll()
        ])
        return res.render('propiedades/crear',{
            tituloPagina:'Crear Propiedad',
            barra:true,
            csrfToken: req.csrfToken(),
            categorias, 
            precios,
            errores: resultado.array(),
            propiedad: req.body
            
        })
    }
    
    const { PRP_tituloAnuncio,PRP_Descripcion,PRP_categoriaPropiedad,PRP_precio,PRP_habitaciones,PRP_estacionamiento,PRP_wc,PRP_direccion,PRP_latitud,PRP_longitud, PRP_imagen = 'Image.png'} = req.body

    try{   
        const propiedadGuardada = Propiedad.create({
            PRP_tituloAnuncio,
            PRP_Descripcion,
            PRP_categoriaPropiedad,
            FK_PRE_idPrecio: PRP_precio,
            FK_CAT_idCategoria: PRP_categoriaPropiedad,
            PRP_habitaciones,
            PRP_estacionamiento,
            PRP_wc,
            PRP_direccion,
            PRP_latitud,
            PRP_longitud,
            PRP_imagen,
        });

    }catch(error){
        console.log(error);
    }
    
}

export {
    admin, crearPropiedad,guardarPropiedad
}