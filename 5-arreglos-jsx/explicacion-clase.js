/*
Con jsx tambien podmeos trabajar con arreglos. Como tenemos un arreglo lo podemos iterar con un ciclo y mostrar el contenido del arreglo.

Creamos nuestro arreglo:
const amigos = ['Alejandro', 'Manuel', 'Maria'];

Y lo iteramos por medio del metodo map():

<ul>
  {amigos.map((amigo, index) => {
    return <li key={index}>{amigo}</li>
  })}
</ul>

Aqui una cosa que debemos saber que nos pedira siempre que le pongamos el atributo key={} sino nos dara un warning por consola.
El codigo nos queda asi:

import React from 'react';
import ReactDOM from 'react-dom/client';

const nombre = "Alfredo";
const blue = 'blue';
const red = 'red';
const pais = 'España';
const sesion = true;
const amigos = ['Alejandro', 'Manuel', 'Maria'];

const JSX = (
  <>
    {
      sesion
        ?
        <>
          <h1 className='title' style={{ color: blue }}>Hola {nombre}!!!!</h1>
          <p style={{ color: 'red' }}>Buenas tardes!!!</p>
          {pais && <p>Tu eres de {pais}</p>}
          <p>Lista de amigos:</p>
          <ul>
            {amigos.map((amigo, index) => {
              return <li key={index}>{amigo}</li>
            })}
          </ul>
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

*/