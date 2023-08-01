import { exit } from 'node:process'
import seedCategorias from "./categorias.js";
import seedPrecios from './precios.js'
import categorias from "../models/categoria.js";
import precios from '../models/precio.js'
import db from '../config/db.js'

const importarDatos = async () => {
    try {
        //Autenticar
        await db.authenticate();
        //Generar columnas
        await db.sync();

        //Insertar datos

        await Promise.all([categorias.bulkCreate(seedCategorias), precios.bulkCreate(seedPrecios)])
        console.log('Datos importados Correctamente')

        exit(0); //termina proceso correctamente


    } catch (error) {
        console.log(error);
        exit(1); //termina proceso con errores
    }
}

const eliminarDatos = async () => {
    try {
        await Promise.all([
                categorias.destroy({ where: {}, truncate: true }),
                precios.destroy({ where: {}, truncate: true })
            ])

        console.log("datos eliminados correctamente");
        exit(0)

    } catch (error) {
        console.log(error);
        exit(1); //termina proceso con errores
    }
}

if (process.argv[2] === "-i") {
    importarDatos();
}

if (process.argv[2] === "-e") {
    eliminarDatos();
}