import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [nameNum, setNameNum] = useState(0);

  const counterHandler = () => {
    if (counter % 2 === 0) {
      setNameNum(counter);
    }
    setCounter((prev) => prev + 1);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={counterHandler}>increment</button>
      <h1> student : {nameNum}</h1>
    </div>
  );
};
