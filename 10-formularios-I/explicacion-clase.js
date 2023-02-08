/*
Ahora vamos a ver los formularios en react. seguiremos con nuestra aplicacion.
Vamos a crear un componente para el formulario.

En este ejemplo lo que vemos es como capturar los datos del formaulrio, osea los input introducidos por el usuario, veremos que en el formulario tenemos un input de texto y uno de contraseña.

El componente lo tenemos en component/
FormularioInicioSesion.js

Lo importamos a App.js

NOTA: Los comentarios en jsx:
{ * Aqui codigo a comentar *}

Para el formaulario vamos a crear un estado donde vamos a guardar el estado de los input. Para eso usaremos useState.

Tambien vamos a ver los eventos del formulario, ojo con esto que es importante.
Vamos a recogr el valor del input del formulario. Le agregaremos mas atributos al input.

Tenemos dos atributos que vamos a usar, el value={} que es el valor que le vamos a dar al input y el onChange={} el cual recibe una funcion que se ejecutara cada ves que el input cambie.

Estos atributos deben ir junto.

Nuestro formulario nos queo asi:

import React, { useState } from 'react';

const FormularioInicioSesion = () => {

  // Creamos los estados inicial de los input: El usuario = '' y password = ''
  const [usuario, cambiaUsuario] = useState('');
  const [password, cambiarPassword] = useState('');

  // Definimos las funciones que se ejecutaran al tener un cambio en el input:
  const onChangeUsuario = (e) => {
    cambiaUsuario(e.target.value);
  }

  const onChangePassword = (e) => {
    cambiarPassword(e.target.value)
  }

  return (
    <form action="">
      <p>Usuario: {usuario} </p>
      <p>Contraseña: {password} </p>
      <div>
        <label htmlFor="usuario">Usuario</label>
        <input
          type="text"
          name='usuario'
          id='usuario'
          value={usuario}
          onChange={onChangeUsuario}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name='password'
          id='password'
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <button type='submit'>Iniciar Sesión</button>
    </form>
  );
}

export default FormularioInicioSesion;

Vamos a ver el input, tanto el de text como el de password aqui funcionan igual para captar los datos.

Tenemos primero que con useState asiganamos que el valor del formaulario sea una cadena vacia.

  const [usuario, cambiaUsuario] = useState('');
  const [password, cambiarPassword] = useState('');

  Luego en cada input capturamos los valores usando los atributos name y onChange, estos dos atributos deben ir juntos, cuando el input cambia se ejecuta una funcion y esa funcion captura el evento con su atributo target y su valor.

<input
  type="text"
  name='usuario'
  id='usuario'
  value={usuario}
  onChange={onChangeUsuario}
/>

Vemos la funcion cuando hay un cambio:

  const onChangeUsuario = (e) => {
    cambiaUsuario(e.target.value);
  }

Como vemos lo que hacemos en este ejemplo es capturar los valores del input y pintarlo:

<form action="">
      <p>Usuario: {usuario} </p>
      <p>Contraseña: {password} </p>


Seguimos...
*/