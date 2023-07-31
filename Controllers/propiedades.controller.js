const admin = (req,res) =>{
    res.render('propiedades/admin',{
        tituloPagina:'Mis propiedades',
        barra:true
    })
}   

const crearPropiedad = (req,res) =>{
    res.render('propiedades/crear',{
        tituloPagina:'Crear Propiedad',
        barra:true
    })
}


export {
    admin, crearPropiedad
}