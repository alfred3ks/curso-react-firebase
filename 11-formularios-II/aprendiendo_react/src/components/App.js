import React, { useState } from 'react';
import Usuario from './Usuario';
import FormularioInicioSesion from './FormularioInicioSesion';

const App = () => {

  // Declaramos el estado inicial de la aplicacion usado useState:
  const [sesion, cambiarEstadoSesion] = useState(false);

  const cerrarSesion = () => {
    cambiarEstadoSesion(false);
  }

  const iniciarSesion = () => {
    cambiarEstadoSesion(true);
  }

  return (
    <>
      {
        sesion
          ?
          <div>
            <Usuario />
            <button onClick={cerrarSesion}>Cerrar Sesión</button>
          </div>
          :
          <div>
            <p style={{ color: 'red' }}>No has iniciado sesión...</p>
            <FormularioInicioSesion iniciarSesion={iniciarSesion} />
            {/* <button onClick={iniciarSesion}>Iniciar Sesión</button> */}
          </div>
      }
    </>
  );
}

export default App;