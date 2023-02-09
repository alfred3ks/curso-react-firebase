import React, { useState } from 'react';

const Contador = ({ increment, decrement }) => {
  // Creo el valor inicial del conador:
  const [cuenta, setCuenta] = useState(0);

  // Creo las funciones de incrementar y disminuir valor al contador:
  const incrementar = (valor) => {
    // setCuenta(cuenta + valor);
    setCuenta(cuenta + increment);
  }
  const disminuir = (valor) => {
    // setCuenta(cuenta - valor);
    setCuenta(cuenta - decrement);
  }

  return (
    <div>
      <h1>Contador: {cuenta} </h1>
      {/* <button onClick={() => { return incrementar(3) }}>+</button> */}
      <button onClick={() => { return incrementar() }}>+{increment}</button>
      {/* <button onClick={() => { return disminuir(5) }}>-</button> */}
      <button onClick={() => { return disminuir() }}>-{decrement}</button>
    </div>
  )
}

export default Contador;