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

// We can use multiple hooks

// Rules of Hooks

// Only call Hooks at the top level. Don’t call Hooks
// inside loops, conditions, or nested functions.

// Only call Hooks from React function components.

// -> you will see this in a moment when we create our ownCustomHook
// that they are regular javascript functions, but they rely on react internal mechanisism
