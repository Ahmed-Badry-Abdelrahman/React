import React, { createContext, useState, useCallback } from "react";
import Left from "./left";
import Right from "./right";

export const CounterLContext = createContext();
export const CounterRContext = createContext();

const Loading = () => {
  console.log("Loading-displayed");
  const [leftCount, setLeftCount] = useState(0);
  const [rightCount, setRightCount] = useState(0);

  const handleLeftCount = useCallback(() => {
    setLeftCount((prev) => prev + 1);
    console.log("Left count updated");
  }, []);

  const handleRightCount = useCallback(() => {
    setRightCount((prev) => prev + 1);
    console.log("Right count updated");
  }, []);

  return (
    <div>
      <CounterLContext.Provider
        value={{
          leftCount: leftCount,
          handleLeftCount: handleLeftCount,
        }}
      >
        <Left />
      </CounterLContext.Provider>

      <CounterRContext.Provider
        value={{
          rightCount: rightCount,
          handleRightCount: handleRightCount,
        }}
      >
        <Right />
      </CounterRContext.Provider>
    </div>
  );
};

export default React.memo(Loading);
