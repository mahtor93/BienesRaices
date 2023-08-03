const protegerRuta = async (req,res,next) =>{
    try{
            //verif. token
    }catch(error){
        throw error;
    }finally{
        next();
    }
}

export default protegerRuta;