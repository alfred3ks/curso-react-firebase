/*
Vamos a ver la segunda forma de trabajar con css, sera usando modulos de css.

Esto ya lo tenemos integrado dentro de la herramienta create react app. Osea viene de origen dentro del propio react. No debemos instalar nada.

Esta manera de implementar el css nos permite solucionar el problema de colisions de css con clases que se llamen igual en diferentes componentes.

Seguiremos rabajando con archivos separados de css peero aunque tengamos clases con en el mismo nombre no colisionen.

El codigo css solo va a aplicar donde sea importado.

Para poder trabajar con modulos nuestros archivos deben llevar un nombre especial.

nombre_archivo.module.css

Y nuestroa archivos quedaran asi:

styles/FormularioInicioSesion.module.css
styles/Contador.module.css

Luego en cada archivo de componente importar su respectivo css de esta manera:

import styles from '../styles/FormularioInicioSesion.module.css';

Ahora donde vayamos a aplicar las clase debemos hacerlo usando la palabra styles.clase:

className={styles.formulario}

Aqui en este ejemplo vemos que tenemos una combinacion de la manera anterior y esta de los modulos, lo vemos con el archivo index.css. Lo podemos hacer y no hay problema.


*/