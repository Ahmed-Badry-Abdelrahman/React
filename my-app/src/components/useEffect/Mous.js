import React, { useState, useEffect } from "react";

const MouseOver = () => {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [display, setDisplay] = useState(true);

  const handleMouseMove = (event) => {
    console.log("mouse move");
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    if (display) {
      console.log("useEffect happened");
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [display]);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>toggle</button>
      {display && (
        <h1>
          X__{x} Y__{y}
        </h1>
      )}
    </div>
  );
};

export default MouseOver;
