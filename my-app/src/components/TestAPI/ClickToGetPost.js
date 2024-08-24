import React, { useEffect, useState } from "react";
import axios from "axios";

const GetPostBYClick = () => {
  const [posts, setPosts] = useState([]);
  //   const [postId, setPostId] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const container = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
  };
  const card = {
    maxWidth: "300px",
    margin: "20px",
    border: "1px solid #ccc",
    padding: "20px",
    boxSizing: "border-box",
    backgroundColor: "#fff",
  };
  const img = {
    width: "100%",
    height: "200px",
    objectFit: "contain",
  };

  useEffect(() => {
    const FetchData = async () => {
      const url = "https://jsonplaceholder.typicode.com/photos";
      try {
        const response = await axios.get(url);
        setPosts(response.data);
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    FetchData();

    return () => {
      // cleanup function
      setPosts([]);
      setError(null);
      setLoading(true);
    };
  }, []);
  return (
    <div>
      <h1>posts</h1>
      <div style={container}>
        {loading && <p>loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && posts.length === 0 && <p>no posts to show</p>}
        {!loading &&
          !error &&
          posts.map((post) => {
            return (
              <div style={card} key={post.id}>
                <img style={img} src={post.thumbnailUrl} alt="post__img" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GetPostBYClick;
