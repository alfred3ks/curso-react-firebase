/*
Ya hemos visto como separar en archivos nuestos componentes. Ahora vamos a ver las propiedades de los componentes.

Con las propiedades podemos hacer que nuestros componentes sean mas dinamicos.

Asi como un elemento tiene propiedades, a los componentes tambien podemos ponerle propiedades.

Vamos a ver el componente TituloAzul. Le pasaremos una propiedad:

  <TituloAzul nombre="Manuel" />

Esta propiedad es recibida en el componente:

const TituloAzul = (props) => {
  console.log(props);
  const nombre = "Christian";
  const blue = 'blue';
  return (
    <h1 className='title' style={{ color: blue }}>Hola {nombre}!!!!</h1>
  );
}

Vemos que lo que recibimos: UN objeto!!!! OJO CON ESTO!!!

{
    "usuario": "Manuel"
}

Ahora ya que podemos recibir esa propiedad la podemos usar dentro del componente:

  <TituloAzul nombre="Manuel" />

const TituloAzul = (props) => {
  console.log(props);
  const nombre = props.nombre;
  const blue = 'blue';
  return (
    <h1 className='title' style={{ color: blue }}>Hola {nombre}!!!!</h1>
  );
}

Como lo que recibimos del componente es un objeto {} con JS moderno podemos hacer desestructuring del objeto, que consiste en solo extraer lo que nos interesa del objeto:

  <TituloAzul nombre="Manuel" />

const TituloAzul = ({ nombre }) => {
  const blue = 'blue';
  return (
    <h1 className='title' style={{ color: blue }}>Hola {nombre}!!!!</h1>
  );
}

Ya no hace falta declarar la varaible porque ya viene por argumento, si queremos mas propiedades se las tenemos que pasar separadas por coma como vemos con el color:

<TituloAzul nombre="Manuel" color="blue" />

const TituloAzul = ({ nombre, color }) => {

  return (
    <h1 className='title' style={{ color: color }}>Hola {nombre}!!!!</h1>
  );
}

Ahora veremos como con un solo componente en funcion de las propiedades podemos uarlo vamos a crear un solo componente y reutilizarlo:

  <Titulo nombre="Christian" color="red" />
  <Titulo nombre="Manuel" color="blue" />

const Titulo = ({ nombre, color }) => {
  return (
    <h1 className='title' style={{ color: color }}>Hola {nombre}!!!!</h1>
  );
}

export default Titulo;

Ahora tambien debemos saber que a los componentes podemos pasar propiedades por defecto, por si falla la entrada de la propiedad desde el componente:

    <Titulo nombre="Christian" color="red" />
    <Titulo nombre="Manuel" color="blue" />
    <Titulo />

const Titulo = ({ nombre = 'usuario', color = 'grey' }) => {
  return (
    <h1 className='title' style={{ color: color }}>Hola {nombre}!!!!</h1>
  );
}

Ahora debemos saber que esas propiedades que podemos pasar pueden ser:

- Un objeto -> {} <Titulo usuario = {nombre, apellido, edad}/>
- Un arreglo -> {} <Titulo amigos = {["Luis", "Maria", "Frani"]}/>
- Numeros -> {} <Titulo calculo= {1+2}/>

En definitiva podemos pasar muchas cosas por propiedades.

*/