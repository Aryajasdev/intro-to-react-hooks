import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function Mouse(props) {
  const position = useMousePosition();

  return props.children(position);
}

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event) {
      setPosition({
        x: event.clientX,
        y: event.clientY
      });
    }
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  return position;
}
