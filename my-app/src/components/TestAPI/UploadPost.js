import React, { useState } from "react";
import axios from "axios";

const UploadPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [post, setPost] = useState({});

  const formHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const data = {
        title: title,
        body: body,
        userId: userId,
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (!title || !body || !userId) {
        throw new Error("Please enter all fields");
      }

      const response = await axios.post(url, data, config);
      console.log(response.data);
      setPost(response.data);
      setTitle("");
      setBody("");
      setUserId("");
    } catch (err) {
      setError(err.message || "something wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="userId"
        />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="body"
        />
        <button type="submit">Send</button>
      </form>

      <div>
        {loading && <p>loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && post.id && (
          <div>
            <h1>{post.id}</h1>
            <h1>{post.title}</h1>
            <h1>{post.body}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPost;
