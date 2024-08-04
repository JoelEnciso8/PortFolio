// import Notificacion from "./classes/Notification.js";
// import Admin from "./classes/AdminCitas.js";
import { pacienteInput,propietarioInput,emailInput,fechaInput,telefonoInput,sintomasInput,formularioInput} from "./selectores.js";
import { datosCita,submitForm } from "./funciones.js";
// Creamos el eventListiner , el cual le agregamos una funcion reutilizable datosCita, a cada atributo del form. 
pacienteInput.addEventListener('change',datosCita);
propietarioInput.addEventListener('change',datosCita);
emailInput.addEventListener('change',datosCita);
telefonoInput.addEventListener('change',datosCita);
fechaInput.addEventListener('change',datosCita);
sintomasInput.addEventListener('change',datosCita);
formularioInput.addEventListener('submit',submitForm)

