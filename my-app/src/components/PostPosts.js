import { useState } from "react";
export const PostPosts = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    sendPost();
  };

  const sendPost = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          title: title,
          body: body,
          userId: userId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <h2>Posts</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="userId"
        />
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />
        <textarea
          type="text"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="body"
        />

        <button type="submit">send</button>
      </form>
    </div>
  );
};
