import { useState, useEffect } from 'react';

const useObtenerArticulos = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Simulamos el llamado a una BD: Se eejcutara la primera vez por eso lleva el [] recuerda.
  useEffect(() => {
    // Usamos setTimeout para simular la conexion:
    setTimeout(() => {
      setArticulos([
        {
          id: 1,
          titulo: 'Titulo primer articulo'
        },
        {
          id: 2,
          titulo: 'Titulo segundo articulo'
        },
        {
          id: 3,
          titulo: 'Titulo tercer articulo'
        }
      ])
      setCargando(false);
    }, 2000)

  }, []);

  return [articulos, cargando];
}

export default useObtenerArticulos;