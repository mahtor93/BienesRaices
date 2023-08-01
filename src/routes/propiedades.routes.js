import expres from 'express'
import { admin, crearPropiedad } from '../../Controllers/propiedades.controller.js';

const router = expres.Router();

router.get('/mis-propiedades', admin)
router.get('/propiedades/crear', crearPropiedad)


export default router