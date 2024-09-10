Que es Vue.js?

Creado por Evan You, Vue.js es un marco JavaScript progresivo de código abierto para crear interfaces de usuario (UI) y aplicaciones de una sola página; se conoce comúnmente como Vue. Este marco utiliza "alto desacoplamiento", lo que permite a los desarrolladores crear progresivamente interfaces de usuario (UI).

---Configuracion del entorno-----------------------------------------------------

Hay diferentes formas de incluir Vue.js en su proyecto web:

● Descargar el archivo Vue.js e incluirlo con la etiqueta <script> directamente en el archivo HTML.

● Usar CDN al incluir la etiqueta <script> en el archivo HTML

● Instalarlo con Node Package Manager (NPM)

● Usar Vue-cli para configurar su proyecto
------------------------------Instalando Tailwind

npm install -D tailwindcss postcss autoprefixer

------------------Componentes En VUE.JS --------------------------

los componentes te ayudaran a dividir tu codigo en partes reusables
los componentes usan la extension .vue y se importa con import desde js
para tener en cuenta que cualquier componente importado con <script setup> se hace dispoible con el template

----------------API STYLE VUE--------------------------
Option API: usa una sintax de tipo obj, se recomienda usar si eres nuevo en Vue y si integraras otros lengukjes en tu codigo
Composition API: se definen los componentes utilizando imports y escribiendo las fn directamente en el component, siempre y cuando creas toda la app con vue se usa este style

-------EVENTOS EN VUE ----------------------------------------------------------------------
todas las apps requieren eventos, asi como REACT , onClick, onStage, etc, cuando un user escribe en un campo y realiza un subtmit es un event de tipo subtmit , click es un elemento
Los Events se agregan con la directiva: v-on , o @evento

---------------------STATE EN VUE JS----------------------

the source of truth , de tu app, si el carrito de compras esta lleno o no, si el user esta o no registrado. esto se basa a ciertas condiciones del codigo

Como VUE administra el State?:
con las fn de ref y ractive,(ya vienen instaladas en VUE ), se les puede pasar un entero

Pinia, administra el state en produccion

----------COMPUTED PROPERTIES--------------------------------------
en Vue.js es para tener un codigo mas ordenado, teniendo actualizaciones en el codigo, se recomineda el use de este para que el codigo qude limpio, esta fn se importa de vue

Watchers en VS

- Con los computed properties podemos revisar llos valores derivados de una funcion; pero algunas veces queremos modificar algo extra ecuando algun state cambia, con composition API se puede:

* Tomar mas de una dependecia ; y cuando estas cambien podemos llamar otra fn o validar
