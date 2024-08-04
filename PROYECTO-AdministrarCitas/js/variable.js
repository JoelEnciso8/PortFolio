
import { generandoID } from "./funciones.js";

 let editando = {
    value: false
 };
    // Obj cita para agrupar los elementos del HTML
       const citaObj = {
        paciente: '',
        id: generandoID(),
        propietario: '',
        email: '',
        telefono: '',
        fecha: '',
        sintomas:'',
    
    };

    export{
        editando,
        citaObj
    }