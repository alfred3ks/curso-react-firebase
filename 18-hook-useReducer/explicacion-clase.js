/*
Vamos a ver otro hooks importante en react.
useReducer()

Este hook tambien nos va a permitir trabajar con el estado de nuestros componentes pero de manera diferente, nos aporta alguna ventajas sobre todo para aplicaciones mas grandes.

Vamos a trabajar en el archivo de Contador.js
Con este hook lo que haremos es sustituir el useState() porque como vemos en los dos botones cambiamos el estado de los mismos al hacer click pero para este ejemplo tenemos solo 2 funciones para eso pero imaginiemos que tenemos muchos botones y nuestra aplicacion es muy grande esto es poco rentable, no esta mal pero no es lo ideal, para eso tenemos el hook de useReducer().

Vamos a crear dentro de los componentes un archivo: UseReducer.js

Vamos a llevarnos de nuestro archivo Contador.js lo que retorna el contador y lo ponemos en este archivo creado:

  <div>
    <h1>Contador: {cuenta}</h1>
    <Boton negro marginRight marginTop onClick={() => {
      return incrementar()
    }}>
      Aumentar: +{increment}
    </Boton>
    <Boton negro marginRight marginTop onClick={() => {
      return disminuir()
    }}>
      Disminuir: -{decrement}
    </Boton>
  </div>


Hacemos limpia y nos quedaria asi:

import React from 'react';
import Boton from '../elements/Boton';

const UseReducer = () => {
  return (
    <div>
      <h1>Contador:</h1>
      <Boton negro marginRight marginTop>
        Aumentar:
      </Boton>
      <Boton negro marginRight marginTop >
        Disminuir:
      </Boton>
    </div>
  );
}

export default UseReducer;

Ahora este archivo useRducer.js lo importamos en App.js y lo implementamos en este archivo, comentamos el componente <Contador/>

Ahora vamos a usar el hook de useReducer() lo importamos en la cabecera y lo llamamos dentro del componente.

Como ya lo he dicho este hook se usa para dar estado a nuestros componentes muchos mas complejos. En principio con useState() nos vale pero si se hace mas complejo mejor usar este.

Vemos como queda nuestra funcion UseReducer.js



import React, { useReducer } from 'react';
import Boton from '../elements/Boton';

// Creamos las objetos que pasaremos al reducer para el estado inicial:
const contadorInicial = {
  contador: 0
}

// Ahora creamos el reducer, es una funcion: Escucha que tipo de accion estamos ejecutando con el dispath:
const reducer = (estado, accion) => {
  switch (accion.tipo) {
    case 'INCREMENTAR':
      return { contador: estado.contador + 1 }
    case 'DISMINUIR':
      return { contador: estado.contador - 1 }
    case 'REINICIAR':
      return { contador: 0 }
    default:
      return estado;
  }
}

// Creamos nuestro componente reducer:
const UseReducer = () => {
  /*
  Implementamos useReducer:
  Este hook recibe 2 parametros, uno el reducer, una funcion  y otro el estado inicial, un objeto.
  Y a cambio nos va a dar un arreglo [] con el estado y una funcion llamada dispatch.
  dispath cuando la usamos en el evento onclick recibe un objeto, que es una accion, lo vemos en los botones y las llamamos asi:
  Accion:
  {tipo: 'INCREMENTAR'}

  Lo hacemos tambien con el boton de disminuir:
  Accion:
  {tipo: 'DISMINUIR'}

  Ademas he agregado otro boton para hacer un reset del contador.
  Accion:
  {tipo: 'REINICIAR'}

  Esa acciones las implementamos como podemos ver en la funcion reducer por medio de un switch.

  const [estado, dispatch] = useReducer(reducer, contadorInicial);

  return (
  <div>
    <h1>Contador: {estado.contador}</h1>
    <Boton
      negro
      marginRight
      marginTop
      onClick={() => {
        return dispatch({ tipo: 'INCREMENTAR' })
      }}
    >
      Aumentar +1
    </Boton>
    <Boton
      negro
      marginRight
      marginTop
      onClick={() => {
        return dispatch({ tipo: 'DISMINUIR' })
      }}
    >
      Disminuir -1
    </Boton>
    <Boton
      negro
      marginRight
      marginTop
      onClick={() => {
        return dispatch({ tipo: 'REINICIAR' })
      }}
    >
      Reset
    </Boton>
  </div>
);
}

export default UseReducer;

  */
