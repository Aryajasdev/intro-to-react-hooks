import React, { useState, useContext, useEffect } from "react";

// import { ThemeContext } from "./themeContext";
import { ThemeContext } from "../themeContext";

function Card(props) {
  const [name, setName] = useState("Morty");
  const [surname, setSurname] = useState("Smith");
  const theme = useContext(ThemeContext);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      // Often, effects create resources that need to be cleaned up
      // before the component leaves the screen, such as a eventListeners
      window.removeEventListener("resize", handleWindowResize);
    };
  });

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
      <div>{width}</div>
    </div>
  );
}

export default Card;

// Notice how the logic is split across life-cycle methods
