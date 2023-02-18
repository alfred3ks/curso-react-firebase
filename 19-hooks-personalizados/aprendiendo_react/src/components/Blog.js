// import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useObtenerArticulos from '../hooks/useObtenerArticulos';

const Blog = () => {

  // Aqui implementamos nuestro hook:
  const [articulos, cargando] = useObtenerArticulos();

  return (
    <ContenedorBlog>
      <Titulo>Blog</Titulo>
      {
        cargando
          ?
          <p>Cargando...</p>
          :
          <div>
            {articulos.map((articulo, index) => {
              return (
                <Articulo key={index}>
                  {articulo.titulo}
                </Articulo>
              )
            })}
          </div>
      }
    </ContenedorBlog>
  );
}

// Damos los estilos aqui:
const ContenedorBlog = styled.div`
  margin: 40px 0 20px 0;
`;

const Titulo = styled.h1`
  margin-bottom: 10px;
`;

const Articulo = styled.p`
  padding: 10px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;

export default Blog;