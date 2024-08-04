
// Variables y selectores 
const formulario = document.querySelector('#agregar-gasto'); // Agregamos el id de form
const gastoListado = document.querySelector('#gastos ul');// Agregamos el div y su ul





// Eventos

eventListeners()
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto ); // Creamos el event que una vez llamado recarga la pag es decir nos ejecuta el codig

    formulario.addEventListener('submit', agregarGasto) // agg dento del eventListener el form el cual dara interaccion sobre lo que agg en el array 



}


// classess 

// Para crear el presupuesto y el restante creamos dos clases que nos daran la informacion correspondiente, heredando la informacion de tal manera
// que nos de el calculo de manera acertada



class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto); // obj Number nos ayuda pasando toda la informacion numerica al constructor que deseamos
        this.restante= Number(presupuesto); 
        this.gastos = []; // Creamos el array que almacenara los gastos adquiridos

    }
    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
     
    }

    // Creamos un nuevo metodo llamado calcular
    calcularRestante(){
        const gastado = this.gastos.reduce((total,gasto) => total + gasto.cantidad, 0)// suma el valor unitario del gasto y lo convierte en total
        this.restante = this.presupuesto -gastado;

    }

    eliminarGasto(id){
        this.gastos= this.gastos.filter(gasto => gasto.id !== id)
        this.calcularRestante();

    }

}



class UI{
    insertarPresupuesto(cantidad){ // insertamos el presupuesto que tenemos disponible 
        const {presupuesto, restante} = cantidad; // Extraemos el valor 


        document.querySelector('#total').textContent = presupuesto.toLocaleString(); // Mostramos el HTML con textContent
        document.querySelector('#restante').textContent = restante.toLocaleString(); // Mostramos el HTML con textContent




    }


    imprimirAlerta(mensaje, tipo){
    // Crear Div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center','alert');

        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error

        divMensaje.textContent = mensaje;

        // insertar en HTML
        document.querySelector('.primario').insertBefore(divMensaje, formulario)
        
        // para quitar el texto por largo timepo add un setTimeout para que se remove en el tiempo deseado
        setTimeout(() => {  
            divMensaje.remove()
            
        }, 3000);

    };

 mostrarGastos(gastos){

    this.limpiarHTML();
    // Iterando sobre los gastgos 
    gastos.forEach(gasto => {
        
        const {cantidad,nombre,id} = gasto; // destructuring del codigo

        // Crear LI
        const nuevoGasto = document.createElement('li');
        nuevoGasto.className= 'list-group-item d-flex justify-content-between align-items-center';
        nuevoGasto.dataset.id = id;

        // agg al HTML 

        nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> $ ${cantidad.toLocaleString()} </span>`;


        // boton Borrar gasto del arry objt

        const btnbBorrar = document.createElement('button');
        btnbBorrar.classList.add('btn', 'btn-danger' , 'borrar-gasto');
        btnbBorrar.innerHTML= 'Borrar &times';
        btnbBorrar.onclick = () => {
            eliminarGasto(id);
        }
        nuevoGasto.appendChild(btnbBorrar);

        // Agg to HTML
        gastoListado.appendChild(nuevoGasto)




    });        
}

        limpiarHTML(){
            while (gastoListado.firstChild) {
                gastoListado.removeChild(gastoListado.firstChild)
            }
        }


        actualizarRestante(restante){
            document.querySelector('#restante').textContent = restante; // Mostramos el HTML con textContent

        }

        comprobarPresupuesto(presupuestoObj){
            const {presupuesto, restante} = presupuestoObj;
            const restanteDiv = document.querySelector('.restante ');

            // comprobar 25%

            if ((presupuesto / 4) > restante) {
                restanteDiv.classList.remove('alert-success', 'alert-warning');
                restanteDiv.classList.add('alert-danger');
            } else if((presupuesto / 2) > restante) {
                restanteDiv.classList.remove('alert-success');
                restanteDiv.classList.add('alert-warning');
            }else{
                restanteDiv.classList.remove('alert-danger','alert-warning');
                restanteDiv.classList.add('alert-success');
            }


            // si se agota el dinero 

            if (restante <= 0) {
                ui.imprimirAlerta('El Dinero Se agotó','error');
                //para que prevengan agregar ma gastos sin dinero
                document.getElementById('enviar').disabled = true;       
                 }
        }

}

// instanciando UI de forma global

const ui = new UI();
let presupuesto;

// FUNCIONES


function preguntarPresupuesto() { // fn que mostrara el prompt en ejecucion y lo validara hasta dar el resultado deseado
    const presupuestoUser = prompt('Cual es tu presupuesto?');

        if (presupuestoUser === '' || presupuestoUser === null ||isNaN(presupuestoUser)||presupuestoUser <= 0) { // validacion false number 
            window.location.reload(); // must recharge if no # added
            
        }

    // Verificar si hay un presupuesto guardado en el almacenamiento local
    if (localStorage.getItem('presupuesto')) {
        presupuesto = JSON.parse(localStorage.getItem('presupuesto'));
        ui.insertarPresupuesto(presupuesto);
        ui.mostrarGastos(presupuesto.gastos);
        ui.actualizarRestante(presupuesto.restante);
        ui.comprobarPresupuesto(presupuesto);
    }


    // Presupuesto valido

         presupuesto = new Presupuesto(presupuestoUser); 

        ui.insertarPresupuesto(presupuesto)

}


function agregarGasto(e) {
    e.preventDefault();




    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if (nombre === '' || cantidad === '') {
        // console.log('both are Mandatory to fill ');
        ui.imprimirAlerta('Ambos campos son Obligatorios', 'error');

        return;

    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('cantidad No valida','error');

        return;
    }


 // Verificar si hay suficiente presupuesto disponible
 if (cantidad > presupuesto.restante) {
    ui.imprimirAlerta('No hay suficiente presupuesto para este gasto','error');
    return;
}


    // Creando gasto , object literal
    const gasto = {nombre, cantidad, id: Date.now()} 
    
    // Añade nuevo gasto
    presupuesto.nuevoGasto(gasto);


    // Guardar presupuesto en el almacenamiento local
    localStorage.setItem('presupuesto', JSON.stringify(presupuesto));


    // msj positivo
    ui.imprimirAlerta('Gasto agregado correctamente') 


    // imprimir los gastos 

    const {gastos, restante} = presupuesto;
    ui.mostrarGastos(gastos)

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);
        // reset form
        formulario.reset();

}


// eliminando Gasto

function eliminarGasto(id) {
    // console.log(id);

    presupuesto.eliminarGasto(id);
    const {gastos, restante} = presupuesto
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);

     // Actualizar datos en el almacenamiento local
     localStorage.setItem('presupuesto', JSON.stringify(presupuesto));
}