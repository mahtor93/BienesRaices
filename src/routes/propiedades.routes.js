import expres from 'express'
import { body } from 'express-validator'
import { admin, crearPropiedad,guardarPropiedad } from '../../Controllers/propiedades.controller.js';

const router = expres.Router();

router.get('/mis-propiedades', admin)
router.get('/propiedades/crear', crearPropiedad)
router.post('/propiedades/crear', 
        body('PRP_tituloAnuncio').notEmpty().withMessage('El titulo del anuncio es obligatorio'),
        body('PRP_Descripcion').notEmpty().withMessage('La descripción del anuncio es obligatoria'),
        guardarPropiedad
        )


export default router