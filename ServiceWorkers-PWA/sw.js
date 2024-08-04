// creamos archivos PWA para dar soporte cuanod no haya conextion (mostarlos en cache)
<<<<<<< HEAD
const nombreCache = 'apv-v1';
const archivos = [
    '/',
    '../47-ServiceWorkers-PWA/index.html',
    '../47-ServiceWorkers-PWA/error.html',
    '../47-ServiceWorkers-PWA/css/bootstrap.css',
    '../47-ServiceWorkers-PWA/css/styles.css',
    '../47-ServiceWorkers-PWA/js/app.js',
    '../47-ServiceWorkers-PWA/js/apv.js',
=======
const nombreCache = 'apv-v5';
const archivos = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js',
>>>>>>> ab8fbcba9077205b8c543bee9b78671c0aea720c

]




// no usamos window en sw usamos self
//
self.addEventListener('install', e=>{
    console.log('instalado el Service Worker');

    e.waitUntil(
        caches.open(nombreCache)
        .then(cache => {

            console.log('catching ...');
            // para agregar un arr de archivos 
            cache.addAll(archivos)
        })
    )

})

// activando service worker
    self.addEventListener('activate',e=>{
        console.log('Service Worker Activado');

        
        e.waitUntil(
            caches.keys()
            .then(keys =>{
                return Promise.all(
                    keys.filter(key => key !== nombreCache)
                    .map(key => caches.delete(key)) //Borra las demas versiones const nombreCache = 'apv-v4';
                ) 
            })
        )

    })

    // evento Fetch para descargar archivos

    self.addEventListener('fetch', e =>{
        e.respondWith(
            (async function () {
              const cachedResponse = await caches.match(e.request);
              if (cachedResponse) {
                return cachedResponse;
              }
              return fetch(e.request);
            })() 
            .catch  (() =>caches.match('/error.html'))
          );
        
    })
    