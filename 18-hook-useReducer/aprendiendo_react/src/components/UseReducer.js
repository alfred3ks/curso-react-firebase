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

  */
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