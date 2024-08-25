import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Three = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h1>theme is {theme.theme}</h1>
    </div>
  );
};

export default Three;
