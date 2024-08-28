import React, { useState, useEffect } from "react";
import axios from "axios";
const FetchData = () => {
  const [Data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <p>Data 1</p>
      {error && <p>{error}</p>}
      {Data.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default FetchData;
