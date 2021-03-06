import React, { useState, useContext, useEffect } from "react";

// import { ThemeContext } from "./themeContext";
import { ThemeContext } from "../themeContext";

function Card(props) {
  const [name, setName] = useState("Morty");
  const [surname, setSurname] = useState("Smith");
  const theme = useContext(ThemeContext);
  const width = useWindowWidth();

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

// Custom hooks give you the flexibility to create your own abstractions
// that don't inflate the react component tree

// export -> useWindowWidth can be shared

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return width;
}
