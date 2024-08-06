// Exportamos las callsbacks para asi llamarlas en un import module en nuestro  index.js ubicado en la carpeta routes
import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";


const paginaInicio = async (req,res)=>{ // req-lo eque enviamos, res-lo que express nos resonde

    // Consulta 3 viajes del modelo Viaje
    // creamos un promise para garantizar un buen render de nuestro sitio web 
    const promiseDB =[];
    promiseDB.push( Viaje.findAll({limit: 3}));
    promiseDB.push( Testimonial.findAll({limit: 3}));

    try {
        const resultado = await Promise.all(promiseDB);

        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes:resultado[0],
            testimoniales:resultado[1]
        });   
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req,res)=>{ // req-lo eque enviamos, res-lo que express nos resonde
    res.render('nosotros',{
        pagina: 'Nosotros'
    });    
    
}

const paginaViajes = async (req,res)=>{ // req-lo eque enviamos, res-lo que express nos resonde

    try {    
    // consultar BD 
    const viajes = await Viaje.findAll();

        res.render('viajes',{
            pagina: 'Proximos Viajes',
            viajes
        });
       
    } catch (error) {
        console.log(error);
    }
}


const paginaTestimoniales = async (req,res)=>{ // req-lo eque enviamos, res-lo que express nos resonde

    try {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
        });        
    } catch (error) {
        console.log(error);
    }


}


// muestra un viaje por slug
const paginaDetalleViaje = async (request, response) =>{
    
    // const { slug } = request.params;

    try {
        const viaje = await Viaje.findOne( { where : { slug:request.params.slug } });
        
        response.render('slug',{
            pagina: 'Informacion Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }


}


export{
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}