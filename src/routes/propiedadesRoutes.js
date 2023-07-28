import expres from 'express'
import { admin } from '../../Controllers/propiedades.controller.js';

const router = expres.Router();

router.get('/mis-propiedades', admin)


export default router