import React, { useState } from 'react';
import Usuario from './Usuario';
import FormularioInicioSesion from './FormularioInicioSesion';
import ContadorClass from './ContadorClass';

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
    <>
      {
        sesion
          ?
          <div>
            <Usuario />
            <ContadorClass incrementar={23} disminuir={3} />
            <button onClick={cerrarSesion}>Cerrar Sesión</button>
          </div>
          :
          <div>
            <p style={{ color: 'red' }}>No has iniciado sesión...</p>
            <FormularioInicioSesion iniciarSesion={iniciarSesion} />
          </div>
      }
    </>
  );
}

export default App;