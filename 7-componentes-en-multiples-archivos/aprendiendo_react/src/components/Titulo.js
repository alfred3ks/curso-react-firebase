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