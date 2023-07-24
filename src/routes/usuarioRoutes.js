import express from "express";
import { formularioLogin,formularioRegistro,formularioOlvidePassword, registrar,confirmar } from "../../Controllers/usuario.controller.js";    
const router = express.Router();


router.get('/login', formularioLogin);

router.get('/registro', formularioRegistro);
router.post('/registro', registrar)

router.get('/confirmar/:token', confirmar);

router.get('/olvide-password', formularioOlvidePassword);
router.post('/auth/login', (req,res)=>{
    res.json({msg:'Login'})
})



export default router;