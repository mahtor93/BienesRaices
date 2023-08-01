import categorias from "./categoria.model.js";
import precios from "./precio.model.js";
import propiedad from './propiedad.model.js'
import usuario from './Usuario.model.js'


//Este archivo sirve para relacionar las distintas tablas de la base de datos.

propiedad.belongsTo(precios, {foreignKey:'FK_PRE_idPrecio'})
propiedad.belongsTo(categorias, {foreignKey:'FK_CAT_idCategoria'})
propiedad.belongsTo(usuario, {foreignKey:'FK_idUsuario'})

export { categorias, precios,propiedad,usuario }