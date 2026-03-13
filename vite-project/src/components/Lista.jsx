import React from "react";

const Lista = () => {
  // Primero creamos una lista para poder utilizar el metodo map()
  const lista = ["Manza", "Pera", "Melon"];
  // Map nos permite llenar elementos como tablas o en este caso una lista, por que permite comvetir los datos para que estos elementos los puedan utilzar y que ademas se pueda hacer lo que se esta haciendo aqui
  // Que es que se hace una li por cada dato que venga de la lista por medio de map() 😈😈😈
  return (
    <ul className="list-group">
      {lista.map((item, index) => (
        <li key={index} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Lista;
