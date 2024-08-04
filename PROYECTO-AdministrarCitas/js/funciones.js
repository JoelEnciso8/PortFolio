import Notificacion from "./classes/Notification.js";
import Admin from "./classes/AdminCitas.js";
import { citaObj,editando } from "./variable.js";
import { formulario,formularioInput,pacienteInput,propietarioInput,emailInput,fechaInput,telefonoInput,sintomasInput } from "./selectores.js";

   // Funcion Reutilizable
        // e.target,te muestra el evento donde estas escribiendo, el input del HTML en el cual esta ubicado pacienteInput
        // value, podemos ver el atributo escrito en el Form, 

const citas = new Admin();

export function datosCita(e) {
    citaObj[e.target.name] = e.target.value;

    };


  export function limpiarRegistro() {
        // Limpiar el registro del formulario
        // citaObj.paciente = '';
        // citaObj.propietario = '';
        // citaObj.email = '';
        // citaObj.fecha = '';
        // citaObj.sintomas = '';
        
        Object.assign(citaObj,{
        id: generandoID(),
        paciente : '',
        propietario : '',
        telefono:'',
        email : '',
        fecha : '',
        sintomas : '',
        })
    
    
    }
    export  function submitForm(e) { 
        e.preventDefault();

            // some dice que si se cumple al ,menos una condicion todas deben ser validas 
            // trim() nos ayuda a eliminar el espacio en blanco del HTML
            // includes tambien es valido, sin embargo no es tan exigente como some, que no permite que pasen los valores que no esten 
        if (Object.values(citaObj).some(valor => valor.trim()==='')) {
        // se declara la clase Notificacion 
            new Notificacion({
                texto: 'Todos los campos son requeridos...',
                tipo: 'error'
            });
            // llamando el metodo Notificacion
            return;
        }
            if (editando.value) {
                citas.editar({...citaObj})
                new Notificacion({
                    texto: 'Edición Guardado Correctamente ...',
                    tipo: 'exito'
                });
            }else{
                
                citas.agregar({...citaObj});
                new Notificacion({
                    texto: 'Paciente registrado...',
                    tipo: 'exito'
                });
                
            }
            
            
            formularioInput.reset();
            limpiarRegistro();
            formulario.value = 'Registrar Paciente'
            editando.value = false;

            
            
            
    };

     export function generandoID() {
        return Math.random().toString(36).substring(2) + Date.now()
    }


     export function cargarEdicion(cita) {
        Object.assign(citaObj, cita)

        pacienteInput.value = cita.paciente
        propietarioInput.value  = cita.propietario
        emailInput.value  = cita.email
        telefonoInput.value  = cita.telefono
        fechaInput.value  = cita.fecha
        sintomasInput.value  =cita.sintomas 

        editando.value = true;
        formulario.value = 'Guardar Cambios'
    }