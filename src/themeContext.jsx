import React from "react";

export const ThemeContext = React.createContext();

export default function ThemeProvider(props) {
  const theme =
    window.location.pathname === "/class" ? "row themed" : "row themed hook";

  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
}
