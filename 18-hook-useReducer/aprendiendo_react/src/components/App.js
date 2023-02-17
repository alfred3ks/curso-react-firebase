import React, { useState } from 'react';
// import Usuario from './Usuario';
import FormularioInicioSesion from './FormularioInicioSesion';
// import Contador from './Contador';
import Boton from '../elements/Boton';
import UseReducer from './UseReducer';

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
            <UseReducer />
            {/* <Contador increment={1} decrement={1} /> */}
            <Boton largo marginTop onClick={cerrarSesion}>Cerrar Sesión</Boton>
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