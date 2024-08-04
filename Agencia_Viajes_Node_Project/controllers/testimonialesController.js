import { Testimonial } from "../models/Testimoniales.js";
    const guardarTestimonial =async (req, res)=>{
        // console.log(req.body);

        // Validar mensajes de error 
        const{nombre,correo,mensaje} = req.body;

        const errores =[]

        if (nombre.trim()==="") {
            errores.push({mensaje: "El nombre esta vacio"})
            
        }
        if (correo.trim()==="") {
            errores.push({mensaje: "El correo esta vacio"})
        }
        if (mensaje.trim()==="") {
            errores.push({mensaje: "El mensaje esta vacio"})
        }
        if (errores.length > 0) {

            // consultar testimoniales existentes
            const testimoniales = await Testimonial.findAll();


            // mostrar la vista con errores
            res.render('testimoniales',{
                pagina: 'Testimoniales',
                errores,
                nombre,
                correo,
                mensaje,
                testimoniales
            })
        }else{
            // Almacenando en la base de datos , es decir nos ayuda a traer la informacion de nuestro testimoniales.pug y lo renderiza de tal manera que puedas ver en pantalla si esta correo el relleno del form o no, y depende a lo que llene este try catch me ayudara a saber si esta conectado en mi Base de datos 
            try {
                await Testimonial.create({nombre,correo,mensaje});

                res.redirect('testimoniales')
            } catch (error) {
                console.log(error);
            }

        }

    }









export {
    guardarTestimonial
}