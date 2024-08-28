import React, { useDeferredValue, useEffect, useMemo, use } from "react";

const List = ({ input }) => {
  const deferredInput = useDeferredValue(input);

  const listItems = useMemo(() => {
    const items = [];
    for (let i = 0; i < 100; i++) {
      items.push(<p key={i}>{deferredInput}</p>);
    }
    return items;
  }, [deferredInput]);

  useEffect(() => {
    console.log(`input: ${input} \n deferredInput: ${deferredInput}`);
  }, [input, deferredInput]);

  return <div>{listItems}</div>;
};

export default List;
