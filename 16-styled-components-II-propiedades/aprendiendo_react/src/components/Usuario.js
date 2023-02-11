import React from 'react';
// import { TituloRojo, TituloAzul } from './Titulo';
import Titulo from './Titulo';
import styled from 'styled-components';

// Creamos nuestro primer componente:
const Usuario = () => {

  const red = 'red';
  const pais = 'España';
  const amigos = ['Alejandro', 'Manuel', 'Maria'];

  return (
    <div>
      <Titulo nombre="Christian" color="blue" />
      <Parrafo style={{ color: red }}>Buenas tardes!!!</Parrafo>
      {pais && <p>Tu eres de {pais}</p>}
      <Parrafo>Lista de amigos:</Parrafo>
      <ul>
        {amigos.map((amigo, index) => {
          return <li key={index}>{amigo}</li>
        })}
      </ul>
      <Parrafo>Que tengas un buen dia... Saludos!!!</Parrafo>
    </div>
  );
}

// Creamos nuestro styled component para el parrafo:
const Parrafo = styled.p`
  margin: 20px 0;
  padding: 20px 10px;
  background-color: ghostwhite;
`;


export default Usuario;