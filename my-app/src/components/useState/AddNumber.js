import { useState } from "react";

export const AddNumber = () => {
  const [items, setItems] = useState([]);

  const addHandler = () => {
    setItems([
      ...items,
      {
        id: items.length,
        number: Math.floor(Math.random() * 10),
      },
    ]);
  };

  return (
    <div>
      <button onClick={addHandler}>Add number</button>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.number}</li>;
        })}
      </ul>
    </div>
  );
};
