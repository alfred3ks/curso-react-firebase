import styled from 'styled-components';

const Boton = styled.button`
  background: #83d394;
  display: inline-block;
  margin: 5px 10px 0 0;
  padding: 20px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  cursor: pointer;
  transition: 0.3s ease all;

  /* Asi arreglas las pseudo clases */
  &:hover {
    background: #44a559;
    color: #fff;
  }
`;

export default Boton;