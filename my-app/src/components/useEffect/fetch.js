import React, { useState, useEffect } from "react";
import axios from "axios";

export const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDataFromUrl = async (url) => {
      try {
        const response = await axios.get(url);
        console.log(response.data);
        setData(response.data);
      } catch (e) {
        console.error(e.message);
        setData(null);
      }
    };
    getDataFromUrl("https://jsonplaceholder.typicode.com/posts/1");
  }, []);

  return (
    <div>
      <h2>Fetching Data...</h2>
      <ul>
        {data &&
          data.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
};
