import express from 'express' ;
import {  paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje 
} from "../controllers/paginacontroller.js";

import {
    guardarTestimonial


}  from "../controllers/testimonialesController.js";

const router = express.Router();

// get es parte del framework Express el cual nos permite entrar de forma dinamica  en nuestro servidor dado que soporta los diff verbos, (get, pug,path,next), si queremos enviar datos sobre la URL usamos los diferentes verbos mencionados 
router.get('/',paginaInicio);

router.get('/nosotros',paginaNosotros);

router.get('/viajes',paginaViajes);

router.get('/viajes/:slug',paginaDetalleViaje);

router.get('/testimoniales',paginaTestimoniales);
router.post('/testimoniales',guardarTestimonial);


export default router; // al exportarlo lo podemos usar en el index.js main 
