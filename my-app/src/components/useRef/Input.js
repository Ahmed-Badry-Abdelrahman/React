import React, { useRef, useEffect } from "react";

const Input = () => {
  const inputRef = useRef(null);

  console.log(inputRef.current);
  return (
    <div>
      <input ref={inputRef} type="text" />

      <button onClick={() => inputRef.current.focus()}> search </button>
    </div>
  );
};

export default Input;
