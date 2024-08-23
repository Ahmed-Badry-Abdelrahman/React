import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>increment</button>
      <button onClick={() => setCounter(0)}>reset</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>decrement</button>
    </div>
  );
};
