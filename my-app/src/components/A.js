import B from "./B";
import React, { useRef, createContext } from "react";
export const refContext = createContext();

const A = () => {
  const inputRef = useRef();
  const pRef = useRef();
  const focus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      pRef.current.style.color = "red";
    }
  };

  return (
    <div>
      <refContext.Provider value={{ inputRef, pRef }}>
        <B />
      </refContext.Provider>

      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default A;
