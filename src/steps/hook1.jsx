import React, { useState } from "react";

function Card(props) {
  const [name, setName] = useState("Morty");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="row">
      Full name
      <input value={name} onChange={handleNameChange} />
    </div>
  );
}

export default Card;
