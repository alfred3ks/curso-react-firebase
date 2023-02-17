import React, { useState } from 'react';
import styles from '../styles/FormularioInicioSesion.module.css';
import Boton from '../elements/Boton';

const FormularioInicioSesion = ({ iniciarSesion }) => {

  // Creamos los estados inicial de los input: El usuario = '' y password = ''
  let [usuario, cambiarUsuario] = useState('');
  let [password, cambiarPassword] = useState('');

  // Definimos las funciones que se ejecutaran al tener un cambio en el input:
  // const onChangeUsuario = (e) => {
  //   cambiarUsuario(e.target.value);
  // }

  // const onChangePassword = (e) => {
  //   cambiarPassword(e.target.value);
  // }

  // Esta es la funcion que sustituye las dos de arriba:
  const onChange = (e) => {
    if (e.target.name === 'usuario') {
      cambiarUsuario(e.target.value);
    }
    else if (e.target.name === 'password') {
      cambiarPassword(e.target.value);
    }
  }

  // Con esta funcion vamos a manejar los eventos en el formulario:
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Los datos se enviaron y se van a validar...');

    // Hacemos la validacion de los datos:
    if (usuario === 'alfredo' && password === '123') {
      console.log('Los datos son correctos.');
      // Si los datos son correctos inicamos la sesion: La funcion viene por props:
      iniciarSesion();
    } else {
      console.log('Los datos son incorrectos.');
      // Datos incorrectos limpiamos el formulario:
      cambiarUsuario('');
      cambiarPassword('');
    }
  }

  return (
    <form action="" onSubmit={onSubmit} className={styles.formulario} >
      <h1 style={{ color: 'black' }}>Inicio de  sesión:</h1>
      <div>
        <label htmlFor="usuario" className={styles.label}>Usuario</label>
        <input
          type="text"
          name='usuario'
          id='usuario'
          value={usuario}
          onChange={onChange}
          className={styles.input}
        />
      </div>
      <div>
        <label htmlFor="password" className={styles.label}>Contraseña</label>
        <input
          type="password"
          name='password'
          id='password'
          value={password}
          onChange={onChange}
          className={styles.input}
        />
      </div>
      {/* Button con styled components */}
      <div>
        <Boton largo type='submit'>Iniciar Sesión</Boton>
      </div>
      {/* <button type='submit' className={styles.boton}>Iniciar Sesión</button> */}
    </form>
  );
}

export default FormularioInicioSesion;