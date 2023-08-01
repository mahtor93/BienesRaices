import Precios from '../models/precio.model.js'
import { validationResult } from 'express-validator'
import Categorias from '../models/categoria.model.js'

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
        precios
    })
}

const guardarPropiedad = async(req,res) =>{
    console.log('guardando propiedad')
    let resultado = validationResult(req);
    if(!resultado.isEmpty()){
        const[categorias,precios] = await Promise.all([
            Categorias.findAll(),
            Precios.findAll()
        ])
        console.log('resultado not empty')
        return res.render('propiedades/crear',{
            tituloPagina:'Crear Propiedad',
            barra:true,
            csrfToken: req.csrfToken(),
            categorias, 
            precios,
            errores: resultado.array()
        })
    }
}

export {
    admin, crearPropiedad,guardarPropiedad
}