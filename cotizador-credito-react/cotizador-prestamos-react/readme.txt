----------------------REACT----------------------------------
Proyecto Con React usando 

QUE ES REACT?

Libreria usada para creeacion de interfaz de usuario, desarrollada por Meta, puedes Desarrollar Facebook, Instagram, Etc. ayuda la UI haciendola mas dinamica 



----------------------Important to know in REACT----------------------------------

JSX: nos ayuda a combinar html con js, todos los HTML elements se pueden usar, pero no todas las fn de JS se usan. 

COMPONENTES: permite dividir el codigo en partes reutilizables, 
los componenetes utilizan la ext js o jsx , se import con import js se nombra en Mayuscula 

HOOKS:

State: Se conoce como la fuente de la verdad,source of truth , es decir: Un listado de clientes, un carrito de compras, un user; determina cual es el estate de la app, para definir estate se importa useState y la funcion al momento de usarse nos retorna 2 values; state y la fn que modifica el state

useEffect: este se ejecuta una vez el componente esta listo y forma un arr de dependencias,se puede pasar un state para que escuche los cambios, si se actualiza el state useState se reinicia 

Administrar State: useState es suficiente para crear app en REACT.

- No debe ser modificado directamente , se debe usar la fn que lo modifica 
- Para un equipo de trabajo o proyecto grande se recomienda administrar el state con un state global, such as : context, Zustand,Recoil, Redux


Events: es aquello que requiere que un evento suceda, ya sea escribir en un campo y submit el form o enviar un email. Los events en react inician con la palabra ON seguido del evento en cuestion, ejempli, onClick, onSubmit, onChange, etc.


----------------------Instalar REACT----------------------------------

Instalar:

Existen diferentes formas de instalar REACT, las mas comunes son 
create-react-app y Vite 

Vite: Permite crear un project en minutos e instalar sus dependencias (npm o yarn para install)

npm create vite@latest -instala vite y su version 

y configuramos a corde nuestra necesidad

----------------------Instalando Tailwind Framework para REACT----------------------------------

npm install -D tailwindcss postcss autoprefixer
instala las dependencias a trabajar 

para iniciar la dependencias

npm tailwindcss init -p 


--------------EJEMPLO-----------------------------

function App()  //para mas seguridad la App es mayuscula {

  // se agrega codigo js

  
  return (<h1>Hola Mundo!!</h1>) // se imprime en pantalla 
}

export default App // se llama la fn 

