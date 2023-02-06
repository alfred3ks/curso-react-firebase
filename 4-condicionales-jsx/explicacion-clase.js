/*
Vamos a ver que en JSX tambien podemos usar condicionales.
Simularemos un sistema de inicio de sesion.
Usaremos el operador ternario: Puedes buscar mas informacion si quieres.

condicion ? muestra esto : sino muestra esto.

const JSX = (
  <>
    {
      sesion
        ?
        <>
          <h1 className='title' style={{ color: blue }}>Hola {nombre}!!!!</h1>
          <p style={{ color: 'red' }}>Buenas tardes!!!</p>
        </>
        : <>
          <h1 style={{ color: red }}>No estas autorizado...</h1>
        </>
    }
  </>
);

Vemos como usamos el operador ternario para mostrar en funcion del condicional mostrar una cosa u otra.

Nos quedaria el codigo asi:

import React from 'react';
import ReactDOM from 'react-dom/client';

const nombre = "Alfredo";
const blue = 'blue';
const red = 'red';
const pais = '';
const sesion = true;

const JSX = (
  <>
    {
      sesion
        ?
        <>
          <h1 className='title' style={{ color: blue }}>Hola {nombre}!!!!</h1>
          <p style={{ color: 'red' }}>Buenas tardes!!!</p>
          {pais && <p>Tu eres de {pais}</p>}
        </>
        : <>
          <h1 style={{ color: red }}>No estas autorizado...</h1>
        </>
    }
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {JSX}
  </React.StrictMode>
);

Tambien podemos observar que podemos mostrando una expresion si un elemento existe o no, para el caso del pais si no tenemos valor no se muestra:

{pais && <p>Tu eres de {pais}</p>}

OJO estas dos formas de mostrar cosas se usa muchisimo en reactJS.

*/