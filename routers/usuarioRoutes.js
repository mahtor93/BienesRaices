import express from "express";
const router = express.Router();


/*
let primos = [];
let raros = [];
function esPrimo(number) {
    if(number==1||number ==0|| number == 4){
        return false;
    }
    for(let i = 2;i<number/2;i++){
        if(number%i ==0){
            return false;
        }
    }return true;
}
function getRandPrimos(bool){
for(let i = 0; i<1000;i++){
    let rand = Math.trunc(Math.random()*1000);
        if(esPrimo(rand)){
            primos.push(rand);
            raros.push(1/rand);
        }
    
}
if(bool){
primos.sort();
return primos;
}
if(!bool){
raros.sort();
return raros;
}
}
*/
router.get('/login', (req,res)=>{
    res.render('auth/login.pug')
})

router.post('/', (req,re)=>{
    res.json({msg:'Hola 2'})
})

export default router;