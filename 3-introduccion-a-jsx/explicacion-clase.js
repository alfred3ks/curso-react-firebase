/*
Introduccion a JSX.

Trabajaremos con codigo HTML dentro de codigo Javascript. Este HTML no lo es. Es codigo JSX.
Vemos el archivo index.js:

import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hola mundo!!!!</h1>
  </React.StrictMode>
);

El codigo que renderiza el h1 no es HTMl es codigo JSX. -> <h1>Hola mundo!!!!</h1>
Si no importaramos react ese codigo fallaria.

JSX nos ayudara a crear nuestros componentes usando la estructura muy parecida a HTML.

Una de las ventajas que nos aporta el trabajar con JSX es que dentro de ese codigo podemos trabajar con expresiones de JS:

import React from 'react';
import ReactDOM from 'react-dom/client';

const nombre = "Alfredo";
const JSX = (
  <div>
    <h1>Hola {nombre}!!!!</h1>
    <p>Buenas tardes!!!</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {JSX}
  </React.StrictMode>
);

Como vemos si queremos mostrar mas de un elemento devemos meterlo dentro de un contenedor en este caso un div, pero si queremos que no se muestre ese div podemos usar los fragmentos de react que es un fragmente que encierra los elementos pero no se renderiza.

import React from 'react';
import ReactDOM from 'react-dom/client';

const nombre = "Alfredo";
const JSX = (
  <>
    <h1>Hola {nombre}!!!!</h1>
    <p>Buenas tardes!!!</p>
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {JSX}
  </React.StrictMode>
);

Otra cosa que debemos saber, suponiendo que queremos darle estilos al elemento, debemos usar className en vez de class ya que en JS class hace referencia a las clases:

  <>
    <h1 className='title'>Hola {nombre}!!!!</h1>
    <p>Buenas tardes!!!</p>
  </>

Tambien podemos trabajar con estilos en linea, no es recomendado.

  <>
    <h1 className='title'>Hola {nombre}!!!!</h1>
    <p style={{ color: 'red' }}>Buenas tardes!!!</p>
  </>

Vemos como nos quedaria nuestro codigo:

import React from 'react';
import ReactDOM from 'react-dom/client';

const nombre = "Alfredo";
const color = 'blue';
const JSX = (
  <>
    <h1 className='title' style={{ color: color }}>Hola {nombre}!!!!</h1>
    <p style={{ color: 'red' }}>Buenas tardes!!!</p>
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {JSX}
  </React.StrictMode>
);

*/