import React from 'react';
import ReactDOM from 'react-dom/client';

const nombre = "Alfredo";
const blue = 'blue';
const red = 'red';
const pais = 'España';
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