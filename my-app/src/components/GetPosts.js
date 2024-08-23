import { useState, useEffect } from "react";
export const GetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [jsonData, setJsonData] = useState("");
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/10/comments";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      setPosts(data);
      setJsonData(JSON.stringify(data, null, 2));
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  };

  // const covertToJson = (posts) => {
  //   const obj = JSON.stringify(posts, null, 2);
  //   setJsonData(obj);
  // };

  return (
    <div>
      <h1>Posts json</h1>
      <pre>{jsonData}</pre>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <h1>{post.userId}</h1>
              <h5>{post.title}</h5>
              <p>{post.body}</p>
              <hr />
            </li>
          );
        })}
      </ul>
      ;
    </div>
  );
};
