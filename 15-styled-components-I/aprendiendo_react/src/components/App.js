import React, { useState } from 'react';
import Usuario from './Usuario';
import FormularioInicioSesion from './FormularioInicioSesion';
import Contador from './Contador';
import Boton from '../elements/Boton';

const App = () => {

  // Declaramos el estado inicial de la aplicacion usado useState:
  const [sesion, cambiarEstadoSesion] = useState(true);

  const cerrarSesion = () => {
    cambiarEstadoSesion(false);
  }

  const iniciarSesion = () => {
    cambiarEstadoSesion(true);
  }

  return (
    <div className='contenedor'>
      {
        sesion
          ?
          <div>
            <Usuario />
            <Contador increment={1} decrement={1} />
            {/* Creamos nuestro componente con styled component: */}
            <Boton onClick={cerrarSesion}>Cerrar Sesión</Boton>
            {/* <button onClick={cerrarSesion}>Cerrar Sesión</button> */}
          </div>
          :
          <div>
            <FormularioInicioSesion iniciarSesion={iniciarSesion} />
          </div>
      }
    </div>
  );
}

export default App;