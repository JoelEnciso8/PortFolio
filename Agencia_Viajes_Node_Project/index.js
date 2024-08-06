// en este archivo creamos y configuramos Express, tengamos en cuenta que JS solo usa modulos de import y export 
import express from 'express';
import router from "./routes/index.js";
import db from "./config/db.js";

// Llamamos a express para que funcione en nuestro proyecto 
const app = express();


// conectando la base de datos , el msj saldra en nuestra terminal cuando corramos el npm 
db.authenticate().then(()=>console.log('Base de Datos conectada') ).catch(error => console.log(error))

// creamos el puerto donde se hara el deployment de nuestro project
// process.env.PORT- se conoce como variables de entorno
const port = process.env.PORT || 4000;


// MIDDLEWARE________________________

// abilitar PUG
app.set('view engine','pug');

// Obtener el año actual
// .use ejecuta todos los verbos de HTTP
app.use((req, res, next)=>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia De Viajes'
    next();
})


// Agregando  para leer datos del form
app.use(express.urlencoded({extended: true}))


// definiendo la carpeta public
app.use(express.static('public'));



// Agregando Router con el modulo use 
app.use('/',router); // '/', sirve para denotar la ruta del route, es decir el directorio actual donde estaremos ubicados  






app.listen(port,()=>{
    console.log(`El server works in the port${port}`);
})

