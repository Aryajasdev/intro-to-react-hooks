import React, { useState, useContext, useEffect } from "react";

// import { ThemeContext } from "./themeContext";
import { ThemeContext } from "../themeContext";

function Card(props) {
  const nameInput = useFormInput("Morty");
  const surnameInput = useFormInput("Smith");
  const theme = useContext(ThemeContext);
  const width = useWindowWidth();

  useDocumentTitle(`${nameInput.value} ${surnameInput.value}`);

  return (
    <div className={theme}>
      Full name
      <input {...nameInput} />
      <input {...surnameInput} />
      <div>{width}</div>
    </div>
  );
}

export default Card;

// This is probably an overkill, but it illustrates the point
// how well you can reuse stateful logic

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return {
    value: value,
    onChange: handleChange
  };
}

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

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
