import React, { useState } from "react";
import "../../styles/Forms.css";

function StudentForm() {
  const defaultValues = {
    name: "",
    age: "",
    isActive: true,
  };
  const [formData, setFormData] = useState(defaultValues);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("user create success");

    setFormData(defaultValues);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label for="age">Age</label>
        <br />
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <br /> <br />
        <input type="submit" value="Send" />
      </form>
    </>
  );
}

export default StudentForm;
