import React, { useState, useContext, useEffect } from "react";

// import { ThemeContext } from "./themeContext";
import { ThemeContext } from "../themeContext";

function Card(props) {
  const [name, setName] = useState("Morty");
  const [surname, setSurname] = useState("Smith");
  const theme = useContext(ThemeContext);

  useEffect(() => {
    document.title = `${name} ${surname}`;
  });

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleSurnameChange(event) {
    setSurname(event.target.value);
  }

  return (
    <div className={theme}>
      Full name
      <input value={name} onChange={handleNameChange} />
      <input value={surname} onChange={handleSurnameChange} />
    </div>
  );
}

export default Card;

// Notice how the logic is split across life-cycle methods

// By default, effects run after every completed render
// but you can choose to fire it only when certain values have changed
