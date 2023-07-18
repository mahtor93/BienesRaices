import { DataTypes } from 'sequelize'
import db from '../config/db.js'


const Usuario = db.define('usuarios',{
    idUsuario:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    token:{
        type: DataTypes.STRING
    },
    confirmado:{
        type:DataTypes.BOOLEAN
    }

})

export default Usuario;