/*
Introducción a los componentes.

Ha llegado la hora de hacer nuestro componentes, son pequeños fragmentos de codigo en forma de capsulas para reutilizarlas en diversas partes.

Un componente en ReactJS no es mas que una simple funcion que retorna algo, ese algo es codigo JSX.

Estos deben seguir unas reglas:

- Primera letra en mayuscula del nombre del componente y retornamos JSX:

const Usuario = () => {
  return (
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
  );
}

Luego donde deseemos usar ese componente solo debemos llamarlo:

<Usuario />

Nuestro codigo nos queda asi:

import React from 'react';
import ReactDOM from 'react-dom/client';

const nombre = "Alfredo";
const blue = 'blue';
const red = 'red';
const pais = 'España';
const sesion = true;
const amigos = ['Alejandro', 'Manuel', 'Maria'];

// Creamos nuestro primer componente:
const Usuario = () => {
  return (
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
      <p>Que tengas un buen dia...</p>
    </>
  );
}

// Creamos otro componente llamado App:
const App = () => {
  return (
    <>
      {
        sesion
          ?
          <Usuario />
          :
          <h1 style={{ color: red }}>No estas autorizado...</h1>
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

*/