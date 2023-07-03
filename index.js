import  express  from 'express'

import usuarioRoutes from './routers/usuarioRoutes.js'
const app = express();


let primos = [];
let raros = [];

//definir puerto
const port = 3000;
app.listen(port,()=>{
    console.log('Server running at '+port)
});

//Routing

app.set('view engine', 'svelte', 'pug')
app.set('views','./views')

app.use('/auth', usuarioRoutes)