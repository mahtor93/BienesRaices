import {check,validationResult} from 'express-validator'
import Usuario from '../models/Usuario.js'

const formularioLogin = (req,res) => {
    res.render('auth/login',{
        tituloPagina:'Iniciar Sesion'

    })
}

const formularioRegistro = (req,res) => {
    res.render('auth/registro',{
        tituloPagina:'Crear Cuenta'
    })
}

const registrar = async (req,res)=>{
    try{
    await check('nombre').notEmpty().withMessage('Nombre obligatorio').run(req);

    await check('email').notEmpty().withMessage('Email obligatorio').run(req);
    await check('email').isEmail().withMessage('Email invalido').run(req);

    await check('password').notEmpty().withMessage('password obligatorio').run(req);
    await check('password').isLength({min:6}).withMessage('El password debe ser de al menos 6 caracteres').run(req);
    await check('repetir_password').equals('password').withMessage('Los passwords no son iguales').run(req);

    let resultado = validationResult(req);

    if(!resultado.isEmpty()){
        return res.render('auth/registro',{
            tituloPagina:'Crear Cuenta',
            errores: resultado.array()
        })
    }

    const usuario = await Usuario.create(req.body);
    res.json(usuario);

    }catch(error){
        throw error;
    }

}

const formularioOlvidePassword = (req,res) => {
    res.render('auth/olvide-password',{
        tituloPagina:'Recuperar contraseña'
    })
}

export {
    formularioLogin, formularioRegistro, formularioOlvidePassword, registrar
} 