import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const timerHandlerRef = useRef();
  const timerRef = useRef(timer);

  useEffect(() => {
    timerRef.current = timer;
  }, [timer]);

  useEffect(() => {
    timerHandlerRef.current = setInterval(() => {
      if (!(timerRef.current >= 5)) {
        setTimer((prev) => prev + 1);
        console.log(timerRef.current);
      }
    }, 1000);

    return () => {
      clearInterval(timerHandlerRef.current);
    };
  }, []);

  return (
    <div>
      <p>{timer}</p>
      <button onClick={() => clearInterval(timerHandlerRef.current)}>
        stop
      </button>
    </div>
  );
};

export default Timer;
