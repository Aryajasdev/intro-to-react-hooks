import React, { useState, useContext, useEffect } from "react";

// import { ThemeContext } from "./themeContext";
// import { useMousePosition } from "./MousePosition";
import { ThemeContext } from "../themeContext";
import { useMousePosition } from "../MousePosition";

function Card(props) {
  const name = useFormInput("Morty");
  const surname = useFormInput("Smith");
  const theme = useContext(ThemeContext);
  const width = useWindowWidth();
  const { x, y } = useMousePosition();

  useDocumentTitle(`${name.value} ${surname.value}`);

  return (
    <div className={theme}>
      Full name
      <input {...name} />
      <input {...surname} />
      <div>{width}</div>
      <div>{`x:${x} y:${y}`}</div>
    </div>
  );
}

export default Card;

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
  }, [title]);
  // Skipping side-effects

  // And we can probably skip some side-effect here as well
  // We only want to change the document.title when the title prop changes
}

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  // Skipping side-effects

  // The default behavior for effects is to fire the effect
  // after every completed render. That way an effect is
  // always recreated if one of its dependencies changes.

  // This is probably an overkill here, bacuase we don't want to
  // add and remove event listeners on every completed render.

  // We want to do this once on componendDidMount and componentWillUnmount

  // To implement this, we ahve to pass a second argument
  // to useEffect that is the array of values that the effect depends on.

  // Since it doesn't depend on anything we can just pass an empty array

  return width;
}
