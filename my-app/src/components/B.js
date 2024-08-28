import React, { useState, useContext } from "react";
import { refContext } from "./A";
const B = () => {
  // Accept refs as props
  const [input, setInput] = useState("");
  const { inputRef, pRef } = useContext(refContext);
  return (
    <div>
      <input
        ref={inputRef} // Attach ref to input field
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <p ref={pRef}>Input: {input}</p> {/* Attach ref to paragraph */}
    </div>
  );
};

export default B;
