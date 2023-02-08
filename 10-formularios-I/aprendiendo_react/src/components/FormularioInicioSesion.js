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