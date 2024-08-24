import React, { useState, useEffect } from "react";

const IntervalCounter = () => {
  // const [count, setCount] = useState(0);
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [display, setDisplay] = useState(true);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [count]);

  // const logMouseMove = (e) => {
  //   setX(e.clientX);
  //   setY(e.clientY);
  // };

  // useEffect(() => {
  //   document.addEventListener("mousemove", logMouseMove);
  // });

  return (
    <div>
      {/*<h1>{count}</h1> */}
      <button onClick={setDisplay(!display)}>toggle</button>
      <p>
        X_ {} : Y_ {}
      </p>
    </div>
  );
};

export default IntervalCounter;
