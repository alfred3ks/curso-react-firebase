/*
Continuamos con los formularios en ReactJS.
En nuestro ejercicio tenemos un input que estan relacionados con estados.
Vamos a ver como hacer validaciones del formulario.

Vamos a ver como prevenir el envio del formulario y poder control del formulario y sus datos.

Seguimos trabajando sobre el formulario, FormularioInicioSesion.js
Vamos a optimizar nuestro codigo para no tener una funcion por cada input que tengamos, para nuestro ejemplo tenemos solo 2 pero imagina que tengamos mas. Seria poco rentable a nivel de codigo, asi que valos arreglar eso.

Con esta funcion sustituimos las dos funciones por separado:
  const onChange = (e) => {
    if (e.target.name === 'usuario') {
      cambiarUsuario(e.target.value);
    }
    else if (e.target.name === 'password') {
      cambiarPassword(e.target.value);
    }
  }

Ahora si vemos tenemos mas input los agregamos mas bajo. Todo en una funcion.

Ahora vamos a realizar la validacion d elos datos, eso lo hacemos cuando el usuario hace click del boton de iniciar sesion:

Vamos a colocar el evento onSubmit = {} al formulario. Y creamos una funcion que pasaremos a este evento.

Esta funcion, llamada onSubmit, va a prevenir el envio por naturaleza de los formularios. Recuerda el e.preventDefault().

Tambien por medio de un if vamos a validar los datos que viene del input.

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Los datos se enviaron y se van a validar...');

    // Hacemos la validacion de los datos:
    if (usuario === 'Alfredo' && password === '123') {
      console.log('Los datos son correctos.');
    } else {
      console.log('Los datos son incorrectos.');
    }
  }

Vale ya validamos los datos ahora vamos a hacer que si los datos son correctos nos cargue la pagina con el componente:

<Usuario /> Que tenemos en App.js

Lo que haremos es pasar por props al: <FormularioInicioSesion />

<FormularioInicioSesion iniciarSesion={iniciarSesion} />

El nombre del objeto pasado podria ser cualquiera pero por convension le pondremos el mismo pero podria ser:

<FormularioInicioSesion funcion={iniciarSesion} />

Vemos como nos queda el formulario:

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Los datos se enviaron y se van a validar...');

    // Hacemos la validacion de los datos:
    if (usuario === 'Alfredo' && password === '123') {
      console.log('Los datos son correctos.');
      // Si los datos son correctos inicamos la sesion: La funcion viene por props:
      iniciarSesion();
    } else {
      console.log('Los datos son incorrectos.');
      // Datos incorrectos limpiamos el formulario:
      cambiarUsuario('');
      cambiarPassword('');
    }
  }

Aqui hemos visto como pasar una funcion por medio de props a traves del componente formulario y ejecutarlos al darle enviar al formulario por medio del evento onSubmit.

Ahora una cosa que sabemos que esto no es la forma de hacer validaciones, es un ejercicio para ver todos los eventos.

OJO, si quieramos trabajar con checkbox es exactamente igual que con un input.

*/