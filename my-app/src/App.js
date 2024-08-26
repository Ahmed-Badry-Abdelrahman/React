import A from "./components/A";
import B from "./components/B";
import E from "./components/E";
import React, { useReducer } from "react";
import CountContext from "./context/ThemeContext";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const style = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div className="App" style={style}>
      <CountContext.Provider value={{ count: count, dispatch: dispatch }}>
        <A />
        <B />
        <E />
      </CountContext.Provider>
    </div>
  );
}

export default App;
