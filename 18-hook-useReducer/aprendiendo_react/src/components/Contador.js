import React, { useState, useEffect } from 'react';
import Boton from '../elements/Boton';

const Contador = ({ increment, decrement }) => {

  // Creo el valor inicial del contador:
  const [cuenta, setCuenta] = useState(0);

  // Creo las funciones de incrementar y disminuir valor al contador:
  const incrementar = () => {
    setCuenta(cuenta + increment);
  }
  const disminuir = () => {
    setCuenta(cuenta - decrement);
  }

  // Implementamos useEffect(): Se ejecutara cada vez que se monta el componente, osea cada vez que renderiza el componente.
  useEffect(() => {
    console.log('El componente se renderizo...');
  });

  // Se carga useEffect() solo la primera vez: Recibe un segundo parametro, un arreglo [] de dependencias: Aqui se puede hacer la conexion a una API.
  useEffect(() => {
    console.log('El efecto se genera solo la primera vez...');
  }, [])

  // Se carga useEffect() solo cuando el contador cambie, osea vemos las dependencias en el array, cuando cambia la cuenta se ejecutara ese codigo, se pueden pasar mas dependencias separadas por comas:
  useEffect(() => {
    console.log('El estado del contador cambio...');
  }, [cuenta])

  // Vemos useEffect() cuando se desmonta el componente, aqui debemos retornar una funcion con el codigo que necesitemos, ejemplo cerrar conexion a BD:
  useEffect(() => {
    return (() => {
      console.log('el componente se desmonto...');
    });
  }, [])

  return (
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
  )
}

export default Contador;