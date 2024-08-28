import { useState } from "react";

const useForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value, // we use the [] to dynamically update yhe key name
    });
  };

  const submitHandler = () => {
    console.log("Form submitted:", formData); // Add this line to see the form data on submit
    setFormData({
      userName: "",
      email: "",
      password: "",
    });
  };

  return { formData, handleChanges, submitHandler };
};

export default useForm;
