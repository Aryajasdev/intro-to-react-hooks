import React, { useState } from "react";

function Card(props) {
  // Array desctucturing -> new ES6 feature

  // const nameState = useState("Will")
  // const name = nameState[0]
  // const setName = nameState[1]

  const [name, setName] = useState("Morty");
  // We don't have to use object to store the state, we can use any primitive

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

// Notice how the state isn't merged, but re-assinged
