import expres from 'express'
import { body } from 'express-validator'
import { admin, crearPropiedad,guardarPropiedad,agregarImagen } from '../../Controllers/propiedades.controller.js';
import protegerRuta from '../../middleware/token.middleware.js';

const router = expres.Router();

router.get('/mis-propiedades', protegerRuta, admin)
router.get('/propiedades/crear',protegerRuta, crearPropiedad)
router.post('/propiedades/crear', protegerRuta,
        body('PRP_tituloAnuncio').notEmpty().withMessage('El titulo del anuncio es obligatorio'),
        body('PRP_Descripcion')
                .notEmpty().withMessage('La descripción del anuncio es obligatoria')
                .isLength({max:255}).withMessage('La descripción es demasiado larga'),
        body('PRP_categoriaPropiedad').isNumeric().withMessage('Debes seleccionar una categoría'),
        body('PRP_precio').isNumeric().withMessage('Debes seleccionar un rango de precios'),
        body('PRP_habitaciones').isNumeric().withMessage('Debes seleccionar una cantidad de habitaciones'),
        body('PRP_estacionamiento').isNumeric().withMessage('Debes seleccionar una cantidad de estacionamientos'),
        body('PRP_wc').isNumeric().withMessage('Debes seleccionar una cantidad de baños'),
        body('PRP_latitud').notEmpty().withMessage('Ubica la propiedad en el mapa'),
        guardarPropiedad
        )

router.get('/propiedades/agregar-imagen/:id',protegerRuta, agregarImagen)


export default router