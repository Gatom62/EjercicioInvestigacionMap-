import React from "react";

const Card = () => {

  const lista = ["Manza", "Pera", "Melon"];

  return (
    <div className="card" style={{ width: "18rem;" }}>
      <div className="card-body">
        {lista.map((item, index) => (
            <h5 key={index} className="card-title">Elemento:{item}</h5>
        ))}
      </div>
    </div>
  );
};

export default Card;
