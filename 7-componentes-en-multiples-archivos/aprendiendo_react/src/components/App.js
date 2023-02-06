import React from 'react';
import Usuario from './Usuario';

const App = () => {
  const sesion = true;
  return (
    <>
      {
        sesion
          ?
          <Usuario />
          :
          <h1 style={{ color: 'red' }}>No estas autorizado...</h1>
      }
    </>
  );
}

export default App;