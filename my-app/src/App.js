import React, { useState, useCallback } from "react";
import { Button } from "./components/Button";
function App() {
  const [count, setCount] = useState(0);
  const list = [1, 5, 10, 50];
  const style = {
    backgroundColor: "#eee",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
  };

  const handleClick = useCallback(
    (number) => {
      setCount((prv) => prv + number);
    },
    [setCount]
  );

  return (
    <div className="App" style={style}>
      <p>{count}</p>
      {list.map((item, index) => {
        return (
          <Button key={index} number={item} onClick={handleClick}>
            increment {item}
          </Button>
        );
      })}
    </div>
  );
}

export default App;
