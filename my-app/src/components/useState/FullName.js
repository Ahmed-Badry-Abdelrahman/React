import { useState } from "react";

export const FullName = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        //{...name, firstName} her we say get all property in this object then override (update) the firstName
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        //{...name, lastName} her we say get all property in this object then override (update) the lastName
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h1>{name.firstName}</h1>
      <h1>{name.lastName}</h1>
      <h1>{JSON.stringify(name)}</h1>
    </div>
  );
};
