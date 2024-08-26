import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        loading: false,
      };
    case "FETCH_FAILURE":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const FetchPosts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
      dispatch({ type: "FETCH_START" });
      const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=20`;
      try {
        const response = await axios.get(url);
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE", payload: error.message });
      }
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={container}>
      {state.posts.map((post) => (
        <div key={post.id} style={imgStyle}>
          <img style={img} src={post.thumbnailUrl} alt={`Post ${post.id}`} />
        </div>
      ))}
      {state.loading && <p>Loading more posts...</p>}
      {state.error && <p>Error: {state.error}</p>}
    </div>
  );
};

export default FetchPosts;
