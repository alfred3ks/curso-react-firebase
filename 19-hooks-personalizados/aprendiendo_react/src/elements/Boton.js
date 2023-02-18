import styled, { css } from "styled-components";

const Boton = styled.button`
  background: #83d394;
  display: inline-block;
  padding: 20px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  cursor: pointer;
  transition: 0.3s ease all;

  // Aqui vamos a dar el ancho dinamico al boton con un condicional:
  width: ${(props) => {
    return (
      /* Aqui vemos el condicional */
      props.largo ? '100%' : 'auto'
    )
  }};

  /* Asi arreglas las pseudo clases */
  &:hover {
    background: #44a559;
    color: #fff;
  }

  // Aqui metemos las propiedades del boton del contador:
  ${(props) => {
    return (
      props.negro &&
      css`
        background-color: #000000;
        color: #ffffff;
        &:hover {
          background-color: #ffffff;
          color: #000000;
        }
      `
    );
  }}

  // Vamos a dar margin arriba a los botones:
  ${(props) => {
    return (
      props.marginTop && css`
      margin-top: 10px;
      `
    )
  }}

  // Para dar margen a la izquierda:
  ${(props) => {
    return (
      props.marginRight && css`
      margin-right: 10px;
      `
    )
  }}

`;

export default Boton;
