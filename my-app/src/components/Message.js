import { useState } from "react";

export const Message = () => {
  const [counter, setCounter] = useState(10);
  const decCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <p>{counter}</p>
      <button onClick={decCounter}>increase</button>
    </div>
  );
};
