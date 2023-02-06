/*
Vamos a crear nuestra primera app de react.

- Creamos un archivo html. index.html lo hacemos dentro de la carpeta miPrimeraApp
En react todo funciona por medio de Javascript.

- En nuestro archivo html solo necesitamos un contenedor donde cargaremos nuestra app.
    <div id="app"></div>

- Agregamos react a nuestro html, lo haremos pr medio de los cdn.
    https://reactjs.org/docs/cdn-links.html
    https://es.reactjs.org/docs/cdn-links.html#gatsby-focus-wrapper

Como estamos en desarrollo cargamos el cdn de desarrollo:
    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

El archivo index.html nos queda asi:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Primera app de React - Version 17 de react</title>
</head>
<body>
  <!-- Tenemos el contenedor donde se carga la app. -->
  <div id="app"></div>

  <!-- Cargamos reactjs y reactDOM develop -->
  <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

  <!-- Creamos un elemento -->
  <script>
    // Accedemos al contenedor de la app:
    const contenedor = document.getElementById('app');
    // Creamos un encabezado:
    const encabezado = React.createElement('h1', {}, 'Hola mundo!!!');
    // Renderizamos en encabezado dentro del div:
    ReactDOM.render(encabezado, contenedor);
  </script>

</body>
</html>

Vale esta version es la version para hacer react 17 ya en las nuevas versiones de react no se hace asi. Lo vemos como se hace asi. Lo vemos en el archivo main.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi primera app de React 18</title>
</head>
<body>

  <div id="app"></div>

  <!-- Agregamos React desde una CDN links -->
  <!-- Segun documentacion:https://es.reactjs.org/docs/cdn-links.html-->
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  <!-- Trabajando con ReactJS 18 -->
  <script>
    const container = document.getElementById('app');
    const encabezado = React.createElement('h1', {}, 'Hola Mundo!!!');
    ReactDOM.createRoot(container).render(encabezado);
  </script>

</body>
</html>

Esta manera de implementar react no es la forma que se hace de manera profesional. Lo veremos en el siguiente apartado.
*/