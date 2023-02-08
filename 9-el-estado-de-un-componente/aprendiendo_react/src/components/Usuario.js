import React from 'react';
// import { TituloRojo, TituloAzul } from './Titulo';
import Titulo from './Titulo';

// Creamos nuestro primer componente:
const Usuario = () => {

  const red = 'red';
  const pais = 'España';
  const amigos = ['Alejandro', 'Manuel', 'Maria'];

  return (
    <div>
      <Titulo nombre="Christian" color="red" />
      <Titulo nombre="Manuel" color="blue" />
      <Titulo />
      <p style={{ color: red }}>Buenas tardes!!!</p>
      {pais && <p>Tu eres de {pais}</p>}
      <p>Lista de amigos:</p>
      <ul>
        {amigos.map((amigo, index) => {
          return <li key={index}>{amigo}</li>
        })}
      </ul>
      <p>Que tengas un buen dia... Saludos!!!</p>
    </div>
  );
}

export default Usuario;