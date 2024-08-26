import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayPosts = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const container = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    margin: "20px",
  };
  const imgStyle = {
    width: "200px",
    height: "200px",
    margin: "10px",
  };

  const img = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=20`;
      try {
        const response = await axios.get(url);
        setLoading(false);
        setPosts((prevPosts) => [...prevPosts, ...response.data]); // Corrected
      } catch (error) {
        setLoading(false);
        setError(error.message || "Network error!");
      }
    };

    fetchData();
  }, [page]); // Include 'posts' only if you use it directly inside fetchData

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll); // Use 'window' instead of 'document'

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, []); // No dependencies, set up listener once

  return (
    <div style={container}>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading &&
        !error &&
        posts.length > 0 &&
        posts.map((post) => {
          return (
            <div key={post.id} style={imgStyle}>
              <img style={img} src={post.thumbnailUrl} alt="post img" />
            </div>
          );
        })}
    </div>
  );
};

export default DisplayPosts;
