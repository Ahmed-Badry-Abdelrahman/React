import React, { useState, useEffect } from "react";

const HookTwo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `count ${count} times`;
    console.log("count changed : " + count);
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        click {count} times
      </button>
    </div>
  );
};

export default HookTwo;
