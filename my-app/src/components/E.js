import React, { useContext } from "react";
import CountContext from "../context/ThemeContext";
const E = () => {
  const { count, dispatch } = useContext(CountContext);
  return (
    <div>
      <h1>Count:- {count}</h1>
      <button onClick={() => dispatch("INCREMENT")}>INCREMENT</button>
      <button onClick={() => dispatch("DECREMENT")}>DECREMENT</button>
    </div>
  );
};

export default E;
