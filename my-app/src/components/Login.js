import React from "react";
import useForm from "../hooks/useForm";
const Login = () => {
  const { formData, handleChanges, submitHandler } = useForm();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChanges}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChanges}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChanges}
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
