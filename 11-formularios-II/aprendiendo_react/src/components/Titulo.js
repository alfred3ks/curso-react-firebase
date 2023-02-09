import React from 'react';

// Creamos un solo componente mas dinamico:
const Titulo = ({ nombre = 'usuario', color = 'grey' }) => {
  return (
    <h1 className='title' style={{ color: color }}>Hola {nombre}!!!!</h1>
  );
}

export default Titulo;


// Titulo color rojo:
// const TituloRojo = () => {
//   const nombre = "Alfredo";
//   const red = 'red';
//   return (
//     <h1 className='title' style={{ color: red }}>Hola {nombre}!!!!</h1>
//   );
// }

// Titulo color azul:
// const TituloAzul = ({ nombre, color }) => {
//   return (
//     <h1 className='title' style={{ color: color }}>Hola {nombre}!!!!</h1>
//   );
// }

// export { TituloRojo, TituloAzul };