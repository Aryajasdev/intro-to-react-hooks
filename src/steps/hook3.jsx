import React, { useState, useContext } from "react";

// import { ThemeContext } from "./themeContext";
import { ThemeContext } from "../themeContext";

function Card(props) {
  const [name, setName] = useState("Morty");
  const [surname, setSurname] = useState("Smith");
  const theme = useContext(ThemeContext);

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
