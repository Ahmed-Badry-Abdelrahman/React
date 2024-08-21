import { ChildComponent } from "./ChildComponent";
import { Ch2 } from "./Ch2";
import { useState } from "react";

export const ParentComponent = () => {
  const [childId, setIdOfChild] = useState([]);

  const getTheIdOfChild = (id) => setIdOfChild([...childId, id]);

  return (
    <div>
      <h1> Parent Component </h1>
      <p>{childId.join("-")}</p>
      {/* Safely handle array and non-array values */}
      <ChildComponent childId={getTheIdOfChild} />
      <Ch2 childId={getTheIdOfChild} />
    </div>
  );
};
