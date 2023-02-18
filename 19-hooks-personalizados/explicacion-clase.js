/*
Ya hemos visto hooks como useReducer(), useEffect() y useState(), estos son los tres hooks que vienen por defecto con react.

Existe la posibilidad de crear nuestros propios hooks personalizados.

Veamos el siguiente ejemplo, en la aplicacion vamos a agregar un pequeño blog.
Creamos el componente Blog.js

La funcionalidad del blog la vamos a poner en un hooks personalizado, y eso porque si queremos usar la logica de ese blog en otra pagina solo nos bastara con importar el hook personalizado.

He creado una carpeta llamada hooks y dentro meteremos nuestros hooks personalizado. Deben seguir un standart deben llamarse usando siempre la palabra use-algo.js

hooks/useObtenerArticulos.js

Un hook lleva la estructura muy parecida a un componente pero este no retorna js sino retorna un objeto o un arreglo. Eso que retorna es lo que vamos a usar donde lo implementemos.

Dentro de los hooks tambien podemos usar otros hook. Como el caso de useState() y useEffect()

Nuestro hooks nos queda asi:
useObtenerArticulos.js








*/