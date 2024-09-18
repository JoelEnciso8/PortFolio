const registrar = (req,res)=>{


    console.log(req.body);
    
    res.send( { msg: 'Registrando User...'});

};


const perfil =(req,res)=>{
    res.send( {msg:'mostrando perfil'} )
};






export{
    registrar,perfil
};