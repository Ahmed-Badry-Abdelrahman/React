import React, { useCallback, useMemo, useState } from "react";

const Counter = () => {
  console.log("render");
  const [countOne, setCountOne] = useState(0);
  const [countTow, setCountTow] = useState(0);
  const [countThree, setCountThree] = useState(0);

  const counterOne = () => {
    setCountOne(countOne + 1);
    console.log("render => from 1");
  };

  const counterTow = () => {
    setCountTow(countTow + 1);
    console.log("render => from 2");
  };

  const counterThree = () => {
    setCountThree(countThree + 1);
    console.log("render => from 3");
  };

  //   const isEven = useCallback(() => {
  //     let i = 0;
  //     while (i < 2000000000) i++;
  //     return countOne % 2 === 0;
  //   }, []);

  //   console.log(isEven);
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);

  console.log(isEven);
  return (
    <div>
      <div>
        <button onClick={counterOne}>Count One -- {countOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={counterTow}>Count Tow -- {countTow}</button>
      </div>
      <div>
        <button onClick={counterThree}>Count Three -- {countThree}</button>
      </div>
    </div>
  );
};

export default Counter;
