/*
Vamos a ver como organizar nuestro codigo en carpetas, lo componentes. Asi mantenemos una mejor estructura y organización de nuestro proyecto.

Vamos a sacar el componente usuario y lo pondremos un un archivo aparte.
Dentro de src creamos una carpeta y la llamamos components:

  src/components

Dentro de esta carpeta debemos crear nuestros componentes que luego exportaremos donde los usemos.

Para los componentes debemos llamarlos en mayusculas la primera letra:

  Usuarios.js

Este componente lo debemos exportar y importarlo donde lo vamos a usar:
El componente Usuario.js nos uqeda asi:

import React from 'react';

// Creamos nuestro primer componente:
const Usuario = () => {

  const nombre = "Alfredo";
  const blue = 'blue';
  const red = 'red';
  const pais = 'España';
  const amigos = ['Alejandro', 'Manuel', 'Maria'];

  return (
    <div>
      <h1 className='title' style={{ color: blue }}>Hola {nombre}!!!!</h1>
      <p style={{ color: red }}>Buenas tardes!!!</p>
      {pais && <p>Tu eres de {pais}</p>}
      <p>Lista de amigos:</p>
      <ul>
        {amigos.map((amigo, index) => {
          return <li key={index}>{amigo}</li>
        })}
      </ul>
      <p>Que tengas un buen dia...</p>
    </div>
  );
}

export default Usuario;

Y lo importamos en el index.js:

import React from 'react';
import ReactDOM from 'react-dom/client';
import Usuario from './components/Usuario';

// Creamos otro componente llamado App:
const App = () => {
  const sesion = true;
  return (
    <>
      {
        sesion
          ?
          <Usuario />
          :
          <h1 style={{ color: 'red' }}>No estas autorizado...</h1>
      }
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

OJO si exportamos un solo componente lo podemos exportar por default.

  export default Usuario;

Vamos a desglozar mas nuestra app para que veamos como poner componentes dentro de componentes. Creamos un componentes para el titulo.
Asi vemos como exportar mas de un componente en un archivo.

import React from 'react';

const TituloRojo = () => {
  const nombre = "Alfredo";
  const red = 'red';
  return (
    <h1 className='title' style={{ color: red }}>Hola {nombre}!!!!</h1>
  );
}

const TituloAzul = () => {
  const nombre = "Christian";
  const blue = 'blue';
  return (
    <h1 className='title' style={{ color: blue }}>Hola {nombre}!!!!</h1>
  );
}

export { TituloRojo, TituloAzul };

Y en la importacion debemos hacerlos asi:

import { TituloRojo, TituloAzul } from './Titulo';

Y ya lo podriamos usar.

  <TituloRojo />
  <TituloAzul />

OJO tambien he creado el componente App.js lo he sacado del index.js

*/