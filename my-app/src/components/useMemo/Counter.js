import React, { useCallback, useEffect, useMemo, useState } from "react";

const Counter = () => {
  const [countOne, setCountOne] = useState(0);
  const [dark, setDark] = useState(true);

  const counterOne = () => {
    setCountOne(countOne + 1);
    console.log("render => from counter  1");
  };

  const themes = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("themes re-render");
  }, [themes]);

  return (
    <div>
      <div>
        <button onClick={counterOne}>Count One -- {countOne}</button>
      </div>
      <div>
        <button onClick={() => setDark((prev) => !prev)}> change theme </button>
      </div>
      <div style={{ backgroundColor: themes.backgroundColor }}>
        <p style={{ color: themes.color }}>test {countOne}</p>
      </div>
    </div>
  );
};

export default Counter;
