import Usuario from '../models/Usuario.js'

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

const registrar = async (req,res)=>{
    const usuario = await Usuario.create(req.body);
    res.json(usuario)

}

const formularioOlvidePassword = (req,res) => {
    res.render('auth/olvide-password',{
        tituloPagina:'Recuperar contraseña'
    })
}





export {
    formularioLogin, formularioRegistro, formularioOlvidePassword, registrar
} 