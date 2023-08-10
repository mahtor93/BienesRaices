//import Precios from '../models/precio.model.js'
import { validationResult } from 'express-validator'
//import Categorias from '../models/categoria.model.js'
import { Propiedad, Precios,Categorias } from '../models/index.model.js';
//import Propiedad from '../models/propiedad.model.js'

const admin = (req,res) =>{
    res.render('propiedades/admin',{
        tituloPagina:'Mis propiedades',
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
            csrfToken: req.csrfToken(),
            categorias, 
            precios,
            errores: resultado.array(),
            propiedad: req.body
            
        })
    }
    
    const { PRP_tituloAnuncio,PRP_Descripcion,PRP_categoriaPropiedad,PRP_precio,PRP_habitaciones,PRP_estacionamiento,PRP_wc,PRP_direccion,PRP_latitud,PRP_longitud, PRP_imagen = 'Image.png'} = req.body

    const { idUsuario:FK_idUsuario } = req.usuario
    try{   
        const propiedadGuardada = await Propiedad.create({
            FK_idUsuario,
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

        const { PRP_idPropiedad } = propiedadGuardada;

        res.redirect(`/propiedades/agregar-imagen/${PRP_idPropiedad}`);

    }catch(error){
        console.log(error);
    }
    
}


const agregarImagen = async(req,res)=>{
    console.log(req.params)
    const { id } = req.params;
    const propiedad = await Propiedad.findByPk(id)


    
    if(!propiedad){
        return res.redirect('/mis-propiedades');
    }

    if(propiedad.PRP_publicado){
        return res.redirect('/mis-propiedades')
    }

    if(req.usuario.idUsuario.toString() !== propiedad.FK_idUsuario.toString()){
        return res.redirect('/mis-propiedades');
    }    

    res.render(`propiedades/agregar-imagen`,{
        tituloPagina: `Agregar Imagen de ${propiedad.PRP_tituloAnuncio}`,
        csrfToken: req.csrfToken(),
        propiedad
    })

}





export {
    admin, crearPropiedad,guardarPropiedad,agregarImagen
}