import { DataTypes } from "sequelize";
import db from '../config/db.js'

const Precios = db.define('precios',{
    PRE_idPrecio:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    PRE_nombre:{
        type:DataTypes.STRING(32),
        allowNull: false
    }
})

export default Precios;