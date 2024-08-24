import React, { useState, useEffect } from "react";
import axios from "axios";

export const GetData = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);

  const genNumber = () => {
    const id = Math.floor(Math.random() * 10);
    setId(id);
  };

  const getPostHandler = () => {
    genNumber();
  };

  useEffect(() => {
    const FetchData = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      console.log(response.data);
      setPosts([...posts, response.data]);
    };
    FetchData();
  }, [id]);

  return (
    <div>
      <p>data</p>
      <button onClick={getPostHandler}>get post</button>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
};
