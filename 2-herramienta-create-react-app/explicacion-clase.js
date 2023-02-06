/*
Vamos a ver ahora como crear un esqueleto de aplicacion de react usando una herramienta oficial creada por la gente de Facebook para montar todo la estructura de un proyecto.

Lo vemos en la pagina de la libreria.

https://create-react-app.dev/docs/getting-started

  npx create-react-app my-app
  cd my-app
  npm start

Vamos a crear un proyecto que llamaremos aprendiendo_react, abrimos la consola:

  npx create-react-app aprendiendo_react
  cd aprendiendo_react
  npm start

Listo!!! ya tenemos nuestra primera app, un esqueleto que podremos usar para desarrollar nuestras app.

Vamos hacer una limpia. Nos quedara el proyecto asi:

public/index.html
src/index.js

Dentro de src es donde vamos a colocar todos los archivos del desarrollo de nuestra aplicacion.
Nuestro archivo index.js queda asi:

import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hola mundo!!!!</h1>
  </React.StrictMode>
);

- Vemos como en la cabecera importamos React y ReactDOM:
import React from 'react';
import ReactDOM from 'react-dom/client';

- Vemos como se crea un elemento llamado root con el metodo createRoot donde le pasamos el id del div del html y con el metodo render renderizamos un componente, en este caso un h1:

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hola mundo!!!!</h1>
  </React.StrictMode>
);

Aqui lo importante es hacer la limpia para comenzar nuestro proyecto desde cero. dejar la carpeta public con el index.html y la src con el index.js como queda en este ejemplo.

*/