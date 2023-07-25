import { check,validationResult } from 'express-validator'
import Usuario from '../models/Usuario.js'
import ValidarClave from '../utilities/validaciones.js';
import {generarId } from '../utilities/tokens.js';
import {emailRegistro} from '../utilities/emails.js'

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
        console.log(req.body);
        await check('nombre').notEmpty().withMessage('Nombre obligatorio').run(req);
        await check('email').notEmpty().withMessage('Email obligatorio').run(req);
        await check('email').isEmail().withMessage('Email invalido').run(req);
        await check('password').notEmpty().withMessage('password obligatorio').run(req);
        await check('password').isLength({min:6}).withMessage('El password debe ser de al menos 6 caracteres').run(req);
        if(!ValidarClave(req.body.password,req.body.repetir_password)){
            await check(req.body.repetir_password).equals(req.body.password).withMessage('Los passwords no son iguales').run(req);
        }

        let resultado = validationResult(req);
        //Retorna mensajes si existe algún error
        if(!resultado.isEmpty()){
            return res.render('auth/registro',{
                tituloPagina:'Crear Cuenta',
                errores: resultado.array(),
                usuario:{
                    nombre:req.body.nombre,
                    email: req.body.email,
                }
            })
        }
        //Verif. Usuario Duplicado
        const usuarioDuplicado = await Usuario.findOne({where: { email :req.body.email }})
        if(usuarioDuplicado){
            return res.render('auth/registro',{
                tituloPagina:'Crear Cuenta',
                errores: [{msg: 'El correo ya está registrado'}],
                usuario:{
                    nombre:req.body.nombre,
                    email: req.body.email
                }
            })
        } 
        req.body.token = generarId();
        // Mensaje de cuenta creada con éxito
        const usuario = await Usuario.create(req.body);
        res.render('Templates/mensaje',{
            tituloPagina: 'Cuenta Creada',
            mensajes: [{msg: 'Enviamos un correo de verificación a: '+req.body.email }]
        });
        emailRegistro(
            {
                nombre: usuario.nombre,
                email: usuario.email,
                token: usuario.token
            }
        )
    }catch(error){
        throw error;
    }

}

const confirmar = async (req,res, next)=>{
    const {token} = req.params;
    const usuario = await Usuario.findOne({where:{token}});

    if(!usuario){
        return res.render('auth/cuenta-confirmada',{
            tituloPagina: 'Error de Autenticación',
            mensaje:'Hubo un error al confirmar tu cuenta',
            error:true
        })
    }
    //Verificar si el token es valido
    //confirmar Cuenta
    res.render('auth/cuenta-confirmada',{
        tituloPagina: 'Autenticación Completa',
        mensaje:'Tu cuenta ha sido confirmada',
        error:false
    })
}

const formularioOlvidePassword = (req,res) => {
    res.render('auth/olvide-password',{
        tituloPagina:'Recuperar contraseña'
    })
}

export {
    formularioLogin, formularioRegistro, formularioOlvidePassword, registrar, confirmar
} 