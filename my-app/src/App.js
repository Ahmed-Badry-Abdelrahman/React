import React, { useState } from "react";
import Button from "./components/Button";
function App() {
  const [count, setCount] = useState(0);
  console.log("App rendered");

  const style = {
    backgroundColor: "#eee",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
  };

  return (
    <div className="App" style={style}>
      <p>{count}</p>
      <Button />
    </div>
  );
}

export default App;
