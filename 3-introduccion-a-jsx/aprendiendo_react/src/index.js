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

