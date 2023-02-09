/*
Los componentes tambien los podemos crear con clases.
Hasta ahora hemos creado componentes funcionales, basados en funciones.

Tambien podemos crear componentes basados en clases, asi empezo react con las clases.

Vamos a crear un componente de un contador pero como hemos dicho con clases.

  ContadorClass.js

Los componentes con clases para poder retorn JSX debemos hacerlo por medio del metodo render().

Podemos ver que para ejecutar eventos como el click no podemos pasarle una funcion sino metodos, recordar que esto es un contador de clases.

Los metodos que definimos dentro de la clase tambien pueden enviar parametros. Por ahi podemos pasar el valor directamente a incrementar o disminuir.

Tambien podemos pasar por props el valor a incrementar o disminuir del contador:

  <ContadorClass incrementar={23} disminuir={3}/>

Como vemos en el constructor ya hemos establecido esas propiedades con props.

    constructor(props) {
    super(props);

Asi que ya los podriamos usar:

<button onClick={() => { return this.incrementar(this.props.incrementar) }}>Incrementar</button>

<button onClick={() => { return this.disminuir(this.props.disminuir) }}>Disminuir</button>

Ahora ya no vamos a trabajar con un componentes con clases, lo haremos con componentes funcional.

*/