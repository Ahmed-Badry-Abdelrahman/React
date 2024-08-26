import React, { useContext } from "react";
import { CounterRContext } from "../../components/useCallBack/loading";
const Right = () => {
  console.log("Right-displayed");
  const count = useContext(CounterRContext);
  return (
    <div>
      <h1>{count.rightCount}</h1>
      <button onClick={count.handleRightCount}>increment</button>
    </div>
  );
};

export default React.memo(Right);
