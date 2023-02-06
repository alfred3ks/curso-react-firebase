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
    <div>
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
    </div>
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