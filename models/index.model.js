import Categorias from "./categoria.model.js";
import Precios from "./precio.model.js";
import propiedad from './propiedad.model.js'
import usuario from './Usuario.model.js'


//Este archivo sirve para relacionar las distintas tablas de la base de datos.

Precios.hasOne(propiedad);


export { Categorias, Precios,propiedad,usuario }