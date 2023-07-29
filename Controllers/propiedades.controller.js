const admin = (req,res) =>{
    res.render('propiedades/admin',{
        tituloPagina:'Mis propiedades'
    })
}   

const crearPropiedad = (req,res) =>{
    res.render('propiedades/crear',{
        tituloPagina:'Ingresar Propiedad'
    })
}


export {
    admin, crearPropiedad
}