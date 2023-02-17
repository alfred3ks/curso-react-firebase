/*
Los hooks en react.
Ya hemos usado un hook en las otras clases, el hook de useState() con el cual inyectabamos funcionelidad a nuestros componentes. La capacidad de poder trabajar con un estado..

Ahora vamos a ver un hook muy importante.
useEffect().

Este hook, nos permite ejecutar codigo en diferentes partes de la vida de nuestro componente.
Lo importamos en la cabecera, lo vamos a usar en el Contador.js
import React, { useState , useEffect} from 'react';

Nota: Los hooks normalemente comienzan con use -> algo.

Seguimos las reglas de los hook:
- Lo utilizamos dentro del componente y en a parte de arriba.
- los hooks no los puedes utilizar dentro de ciclos o condicionales.

useEffect() lo llamamos asi pero recibe por parametrp una funcion.

useEffect(() => {
  console.log('El componente se renderizo...');
});

Aqui vemos nuestro primer efecto, este se ejecutara cada vez que se monte el componente.

Este efecto se produce cada vez que cambie el estado, osea cada vez que carga el componente, o se monta.

Pero si queremos ejecutar el efecto solo cuando se carga por primera vez le podemos agregar un segundo paramentro a useEffect(). Le pasamos un arreglo [] de dependencias. Muy util si necesitamos hacer una conexion a una API.

useEffect(() => {
  console.log('El efecto se genera solo la primera vez...');
}, [])

Como podemos ver este hooks lo podemos llamar las veces que necesitemos.

// Se carga useEffect() solo cuando el contador cambie, osea vemos las dependencias en elarray, cuando cambia la cuenta se ejecutara ese codigo, se pueden pasar mas dependenciasseparadas por comas:
useEffect(() => {
  console.log('El estado del contador cambio...');
}, [cuenta])

Ahora vemos como ejecutar codigo cuando se desmonta el componente:

Vemos useEffect() cuando se desmonta el componente, aqui debemos retornar una funcion con elcodigo que necesitemos, ejemplo cerrar conexion a BD:
useEffect(() => {
  return (() => {
    console.log('el componente se desmonto...');
  });
}, [])

Como hemos visto todo lo que nos aporta useEffect().

Seguimos...

*/