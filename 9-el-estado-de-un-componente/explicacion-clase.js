/*
Llego la hora de ver un tema importante en los componentes, el state o estado de los componentes.

El estado es muy importante para los componentes y para React.
El estado nos permite controlar que es lo que queremos mostrar en la interfaz en un momento dado.

Vamos a trabajar dentro del archivo App.js vamos a colocar un boton para cambiar lo que mostramos en funcion de cerrar la sesion o iniciar la sesion.

El estado nos permite poder administrar en que parte nos encontramos de nuestra aplicacion.

Para trabajar con estado necesitamos un hook de react, empieza lo bueno.
Este hook lo tenemos que importar:

import React, { useState } from 'react';

Este sera nuestro primer hook que veremos, este hook es muy importante.

  Es el hook de useState.

Este hook lo que nos dice es que vamos a utilizar estado.

Los hook siempre pero siempre se trabajan dentro del componente.
Vemos como nos queda el codigo implementando useState:

import React, { useState } from 'react';
import Usuario from './Usuario';

const App = () => {

  // Declaramos el estado inicial de la aplicacion usado useState:
  const [sesion, cambiarEstadoSesion] = useState('true');

  const cerrarSesion = () => {
    cambiarEstadoSesion(false);
  }

  const iniciarSesion = () => {
    cambiarEstadoSesion(true);
  }

  return (
    <>
      {
        sesion
          ?
          <div>
            <Usuario />
            <button onClick={cerrarSesion}>Cerrar Sesión</button>
          </div>
          :
          <div>
            <p style={{ color: 'red' }}>No has iniciado sesión...</p>
            <button onClick={iniciarSesion}>Iniciar Sesión</button>
          </div>
      }
    </>
  );
}

export default App;

Vamos a ver la explicación:
const [sesion, cambiarEstadoSesion] = useState('true');

Aqui asiganamos el valor inicial que tendra nuestra varaible sesion para este caso es true y como segundo parametro pasamos un funcion que cambiara el estado a false.

Dentro de los botones ponemos un evento, en este caso necesitamos el evento onClick={} este evento recibe una funcion que las declaramos:

  const cerrarSesion = () => {
    cambiarEstadoSesion(false);
  }

  const iniciarSesion = () => {
    cambiarEstadoSesion(true);
  }

Como lo vemos es bastante sensillo para este caso, siempre pero siempre que necesitemos cambiar el estado o que nuestro codigo cambie en funcion de una situacion este se renderiz de nuevo y eso lo hace useState. Para nuestro caso pase de true a false la sesion.

Aqui lo que creo es importante es hacer ejercicio de este hook cambiando estado de componentes.

*/