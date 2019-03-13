import React, { useState } from "react";

function Card(props) {
  const [name, setName] = useState("Morty");
  const [surname, setSurname] = useState("Smith");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleSurnameChange(event) {
    setSurname(event.target.value);
  }

  return (
    <div className="row">
      Full name
      <input value={name} onChange={handleNameChange} />
      <input value={surname} onChange={handleSurnameChange} />
    </div>
  );
}

export default Card;
