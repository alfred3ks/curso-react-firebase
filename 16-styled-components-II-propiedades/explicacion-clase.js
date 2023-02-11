/*
Ya hemos visto como implementar styled components en nuestro proyecto y como crear nuestro primeros componentes de estilos, ahora vamos a ver como hacer mas dinamicos los componetes, por ejemplo los botones del contador los haremos que sean de otro color.

Vamos a ver en el archivo del Contador.js los botones sean negros.

Lo que haremos es ponerle propiedades a ese componete, por ejemplo le pondremos la propiedad negro.

<Boton negro onClick={() => { return incrementar() }}>Aumentar: +{increment}</Boton>
<Boton negro onClick={() => { return disminuir() }}>Disminuir: -{decrement}</Boton>

Luego esa propiedad la podemos implementar en el componente Boton.js
Debemos importar en la cabecera css:
import styled, { css } from 'styled-components';

Y nos quedaria asi:

  // Aqui metemos las propiedades:
  ${(props) => {
    return props.negro && css`
  background-color: red;
  color: blue;
  `}}

Version mas corta:
  // Aqui metemos las propiedades:
  ${(props) => {
    return props.negro && css`
  background-color: #000000;
  color: #ffffff;
  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
  `}}

Vaya que interesante!!!!!

Vamos a ver como poner estilos al boton de iniciar sesion:
Metemos el boton dentro de un div para poder jugar con su ancho ya que fuea se va al ancho del formulario osea el 100%.

<div>
  <Boton largo type='submit'>Iniciar Sesión</Boton>
</div>

Le ponemos la propiedad de largo y la implementamos en el componete Boton.js: Lo veremos poniendo un condicional:

 // Aqui vamos a dar el ancho dinamico al boton con un condicional:
  width: ${(props) => {
    return (
      props.largo ? '100%' : 'auto'
    )
  }};

*/