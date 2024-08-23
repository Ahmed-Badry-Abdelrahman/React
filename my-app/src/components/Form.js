import { useState } from "react";

export const Form = () => {
  const [username, setUserName] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(`username ${username}`);
    console.log(`country ${country}`);
    console.log(`message ${message}`);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>username</label>
          <input
            type="text"
            name="username"
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div>
          <label>country</label>
          <select
            name="country"
            onChange={(event) => setCountry(event.target.value)}
          >
            <option value="EG">EG</option>
            <option value="US">US</option>
            <option value="DS">DS</option>
            <option value="ASD">ASD</option>
          </select>
        </div>
        <div>
          <label>message</label>
          <textarea
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};
