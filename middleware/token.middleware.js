const protegerRuta = async (req,res,next) =>{
        //verif. token
        const { UserToken } = req.cookies;
        if(!UserToken){
            return res.redirect('/auth/login');
        }

    
}

export default protegerRuta;