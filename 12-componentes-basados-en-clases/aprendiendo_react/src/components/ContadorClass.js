import React, { Component } from 'react';

// Vamos a crear nuestro componente con clases:
class ContadorClass extends Component {

  // Metodo constructor y con super siempre obligatorio:
  constructor(props) {
    super(props);

    // Asi agregabamos el estado: con this.state a un objeto inicial:
    this.state = {
      contador: 0
    };
  }

  // Creamos los metodos que pasaremos a los botones de Incrementar o Disminuir:
  incrementar(valor) {
    // Tenemos que usar el metodo setStade para establecer un nuevo estado:
    this.setState((estadoOriginal) => {
      // Retornamos un objeto:
      return {
        // contador: estadoOriginal.contador + 1
        contador: estadoOriginal.contador + valor
      }
    })
  }

  disminuir(valor) {
    this.setState((estadoOriginal) => {
      // Retornamos un objeto:
      return {
        // contador: estadoOriginal.contador - 1
        contador: estadoOriginal.contador - valor
      }
    })
  }

  // Creamos el metodo render, es lo que vamos a mostrar por pantalla:
  render() {
    return (
      <div>
        {/* Asi accedemos al valor del estado: */}
        <h1>ContadorClass: {this.state.contador}</h1>
        {/* <button onClick={() => { return this.incrementar(5) }}>Incrementar</button> */}
        <button onClick={() => { return this.incrementar(this.props.incrementar) }}>Incrementar</button>
        {/* <button onClick={() => { return this.disminuir(3) }}>Disminuir</button> */}
        <button onClick={() => { return this.disminuir(this.props.disminuir) }}>Disminuir</button>
      </div>
    );
  }
}

export default ContadorClass;