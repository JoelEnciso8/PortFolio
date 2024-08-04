import { formularioInput } from "../selectores.js";

// ----------------CLASESS-------

        // Creando clase validacion - la cual display a msj en el HTML 
        export default class Notificacion {

            constructor({texto,tipo}){
                this.texto = texto;
                this.tipo = tipo;

                this.mostrar();



            }

            mostrar(){
                // Creamos el metodo notificacion
                const alerta = document.createElement('DIV');
                alerta.classList.add('text-center','w-full','p-3','text-white','my-5','alert','uppercase','font-bold','text-sm')
                          
                // eliminar alertas duplicadas  
                const alertaprev = document.querySelector('.alert')
                    alertaprev?.remove(); // busca la alerta prev y evita que se crea otro, gracias al global chaining

                
                // Agregamos una clase tipo error, ( si es el caso)
                    this.tipo === 'error'? alerta.classList.add('bg-red-500') :alerta.classList.add('bg-green-500');
                 
                    // creamos el mensaje de error 
                    alerta.textContent = this.texto;
               
                    // insertamos la alerta en el formulario    
                formularioInput.parentElement.insertBefore(alerta,formularioInput)
             
                // Evitando alertad duplicadas con setTimeout()
                setTimeout(() => {
                    alerta.remove()
                }, 1000);//en miles (5 mil  = 5 seg )


            
            }

        };

        