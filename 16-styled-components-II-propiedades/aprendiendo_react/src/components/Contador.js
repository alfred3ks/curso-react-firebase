import React, { useState } from 'react';
import Boton from '../elements/Boton';

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
      <h1>Contador: {cuenta}</h1>
      {/* <button onClick={() => { return incrementar(3) }}>+</button> */}
      {/* <button onClick={() => { return incrementar() }} className={styles.boton} >Aumentar: +{increment}</button> */}
      <Boton negro marginRight marginTop onClick={() => { return incrementar() }}>Aumentar: +{increment}</Boton>
      {/* <button onClick={() => { return disminuir(5) }}>-</button> */}
      {/* <button onClick={() => { return disminuir() }} className={styles.boton}  >Disminuir: -{decrement}</button> */}
      <Boton negro marginRight marginTop onClick={() => { return disminuir() }}>Disminuir: -{decrement}</Boton>
    </div>
  )
}

export default Contador;