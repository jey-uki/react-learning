import React from "react";

function UserForm({ formData, editId, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} style={style.form}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <button type="submit">{editId ? "Update User" : "Add User"}</button>
    </form>
  );
}

const style = {
  form: {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
};

export default UserForm;
