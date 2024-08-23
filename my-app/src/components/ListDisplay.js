import { useState, useTransition } from "react";
import Data from "./posts.json";
export const ListDisplay = () => {
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isPending, startTransition] = useTransition();

  const changeHandler = (event) => {
    setInputValue(event.target.value);
    startTransition(() => setQuery(inputValue));
  };

  const filteredTitles = Data.filter((item) => {
    return item.title.includes(query);
  });

  return (
    <div>
      {isPending && <p>loading...</p>}
      <input type="text" value={inputValue} onChange={changeHandler} />
      {filteredTitles.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </div>
  );
};
