/*
Vamos a ver la tercera forma de trabajar con estilos en React.
Styled components.

Vamos a ver la documentacion:

  https://styled-components.com/

Esto nos permite crear nuestras clases de css como si fueran componentes.
Vamos a crear componentes como es el caso d eun boton. Y asi lo podremos reutilzar en toda la web.

Esto es un modulo que debemos instalar, es una dependencia de nuestro app.

Para instalarlo:

npm install --save styled-components

Una ves instalado ya lo podemos usar. Lo podemos hacer dentro del propio archivo del componente js.

Vamos a trabajar para verlo dentro del propio archivo en Usuario.js vamos a crear un componente parrafo.

Importamos en cabecera styled component:

import styled from 'styled-components';

Luego debajo del componente o antes de este, da igual el sitio, creamos nuestro styled component, para el parrafo:

// Creamos nuestro styled component para el parrafo:
// Creamos nuestro styled component para el parrafo:
const Parrafo = styled.p`
  margin: 20px 0;
  padding: 20px 10px;
  background-color: ghostwhite;
`;

Ahora donde esta el parrafo los sustituimos por este.

<Parrafo style={{ color: red }}>Buenas tardes!!!</Parrafo>
<Parrafo>Que tengas un buen dia... Saludos!!!</Parrafo>

Vemnos como se aplican los estilos.

Ahora si queremos hacerlo en archivos por separado lo podemos hacer.
Creamos un directorio llamado elements, ahi guardamos todos los styled components reutilizables, como veremos de los botones.

  src/elements

  Boton.js

Tenemos que importar styled components en la cebecera:
import Boton from '../elements/Boton';
Usaremos los estilos del formulario para el boton.

<Boton type='submit'>Iniciar Sesión</Boton>

Aqui vemos una cosa muy interesante, es que para colocar el hover solo basta con agregar &:hover {} y meter los estilos.

Tambien vamos a cambiar el boton para iniciar cerrar sesion.
Lo importamos en cabecera:
import Boton from '../elements/Boton';

Y lo implementamos donde tenemos el boton:
<Boton type='submit'>Iniciar Sesión</Boton>

Aqui vimos como crear los componentes ya con sus estilos. Facil no? Ahora en el siguiente capitulo vamos a ver como agregar mas dinamismos ya que nuestros botones son todos iguales y queremos que nuestro botones del contador sean negros.

Seguimos...

*/