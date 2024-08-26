import React, { useContext } from "react";
import { CounterLContext } from "../../components/useCallBack/loading"; // adjust the path according to your file structure

const Left = () => {
  console.log("Left-displayed");
  const count = useContext(CounterLContext);

  return (
    <div>
      <h1>{count.leftCount}</h1>
      <button onClick={count.handleLeftCount}>Increment</button>
    </div>
  );
};

export default React.memo(Left);
