import React from "react";
import useGetData from "../hooks/useGetData";
const Fetch2 = () => {
  const { data, error } = useGetData(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <div>
      <p>Data2</p>
      {error && <p>Error: {error}</p>}
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <h5>{item.email}</h5>
            <p>{item.address.street}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Fetch2;
