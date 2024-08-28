import React, { useState, useEffect } from "react";

const DocTitle = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `count - ${count}`;
  }, [count]);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>click</button>
    </div>
  );
};

export default DocTitle;
