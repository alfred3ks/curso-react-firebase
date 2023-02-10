/*
Vamos a ver como usar estilos css a los componentes y a toda una aplicacion de React.

Existen varias formas de agregar el css.
Vamos a ver 3 formas de como trabajar con css en React.

Esta que veremos aqui en este apartado es lamas sencilla.

Lo que haremos es crear por cada componente un archivo css.

Empezamos con la del index.js, ya que aqui llevara los estilos basicos.

creamos en la carpeta src otro carpeta llamada styles y ahi metemos todos los archivos css. Llamaremos los css igual que los componentes.
NOTA: He eliminado el archivo del contador class que aqui no necesitamos para este ejemplo:

src/styles

Para poder usar esos estilos debemos importarlo en el componnete:

Esta manera de trabajar con css esta bien pero tiene un inconveniente, que puede haber colision de clases de css. Lo vemos en el tema de los botones que siempre coje el estilo de los botones del Contador.css y los estilos de los botones en FormularioInicioSesion.css no se aplican.

Como vemos en ambos archivos existen la clase .boton. Para que se apliquen debemos llamarlos distinto.

Esta forma de trabajar con css no esta mal pero debemos tener cuidado como llamar las clases.

Simple... seguimos.

*/