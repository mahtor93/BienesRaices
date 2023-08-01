import express from "express";
import { autenticarLogin,nuevoPassword,comprobarToken, formularioLogin,formularioRegistro,formularioOlvidePassword, registrar,confirmar,resetPassword } from "../../Controllers/usuario.controller.js";    
const router = express.Router();


router.get('/login', formularioLogin);
router.post('/login', autenticarLogin);

router.get('/registro', formularioRegistro);
router.post('/registro', registrar)

router.get('/confirmar/:token', confirmar);

router.get('/olvide-password', formularioOlvidePassword);
router.post('/olvide-password', resetPassword);
//almacena el nuevo password

router.get('/olvide-password/:token',comprobarToken)

router.post('/olvide-password/:token', nuevoPassword)



router.post('/auth/login', (req,res)=>{
    res.json({msg:'Login'})
})



export default router;