import React, { useState, useContext, useEffect } from "react";

import { ThemeContext } from "./themeContext";
import { useMousePosition } from "./MousePosition";

function Card(props) {
  const nameInput = useInputForm("Rick");
  const surnameInput = useInputForm("Sanchez");
  const theme = useContext(ThemeContext);
  const width = useWindowWidth();
  const { x, y } = useMousePosition();

  useDocumentTitle(`${nameInput.value} ${surnameInput.value}`);

  return (
    <div className={theme}>
      Full name
      <input {...nameInput} />
      <input {...surnameInput} />
      <div>{width}</div>
      <div>
        {x} + {y}
      </div>
    </div>
  );
}

export default Card;

export function useInputForm(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}
