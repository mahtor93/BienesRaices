const formularioLogin = (req,res) => {
    res.render('auth/login',{
        tituloPagina:'Iniciar Sesion'

    })
}

const formularioRegistro = (req,res) => {
    res.render('auth/registro',{
        tituloPagina:'Crear cuenta'
    })
}

const registrar = (req,res)=>{
    console.log(req.body);
}

const formularioOlvidePassword = (req,res) => {
    res.render('auth/olvide-password',{
        tituloPagina:'Recuperar contraseña'
    })
}





export {
    formularioLogin, formularioRegistro, formularioOlvidePassword, registrar
} 