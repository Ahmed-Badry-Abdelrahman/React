import React, { useState, useTransition } from "react";

const List = () => {
  const [input, setInput] = useState("");
  const [isPending, startTransition] = useTransition();
  const [list, setList] = useState([]);

  const onChange = (e) => {
    const newValue = e.target.value;
    setInput(newValue); // Update input state

    // Start transition for updating the list
    startTransition(() => {
      const l = [];
      for (let i = 0; i < 1000; i++) {
        l.push(newValue);
      }
      console.log(l);
      setList(l);
    });
  };

  return (
    <div>
      <input onChange={onChange} value={input} />
      {isPending ? (
        <p>Loading...</p>
      ) : (
        list.map((item, index) => <p key={index}>{item}</p>)
      )}
    </div>
  );
};

export default List;
