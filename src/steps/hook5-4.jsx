import React, { useState, useContext, useEffect } from "react";

// import { ThemeContext } from "./themeContext";
import { ThemeContext } from "../themeContext";

function Card(props) {
  const name = useFormInput("Morty");
  const surname = useFormInput("Smith");
  const theme = useContext(ThemeContext);
  const width = useWindowWidth();

  useDocumentTitle(`${name.value} ${surname.value}`);

  return (
    <div className={theme}>
      Full name
      <input {...name} />
      <input {...surname} />
      <div>{width}</div>
    </div>
  );
}

export default Card;

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return {
    value: value,
    onChange: handleChange
  };
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

function useWindowWidth() {
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
