import  express  from 'express'
import db from './config/db.js'
import usuarioRoutes from './src/routes/usuarioRoutes.js'

const app = express();
try{
    await db.authenticate();
    console.log('Conexión correcta a la base de datos');
}catch(error){
    console.log(error);
}

//definir puerto
const port = 3333;
app.listen(port,()=>{
    console.log('Server running at '+port)
});

//Rutas de archivos
app.set('view engine', 'pug')
app.set('views','./views')
app.use(express.static('public'));


//Routing
app.use('/auth', usuarioRoutes)