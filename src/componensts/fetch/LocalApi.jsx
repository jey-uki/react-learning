import React, { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "../forms/UserForm";

function LocalApi() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [editId, setEditId] = useState(null);

  const API_URL = "https://express-mongo-connection-sigma.vercel.app/api/users";

  // Fetch users
  useEffect(() => {
    fetchUsers();
    handleChange;
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Create or Update user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`${API_URL}/${editId}`, formData);
        alert("User updated successfully!");
      } else {
        await axios.post(API_URL, formData);
        alert("User added successfully!");
      }
      setFormData({ name: "", email: "" });
      setEditId(null);
      fetchUsers();
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  // Delete user
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      alert("User deleted successfully!");
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Edit user
  const handleEdit = (user) => {
    setFormData({ name: user.name, email: user.email });
    setEditId(user._id);
  };

  return (
    <div style={style.container}>
      <h2>User Management</h2>

      {/* Reusable Form Component */}
      <UserForm
        formData={formData}
        editId={editId}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {/* Users Table */}
      <table
        border={1}
        cellPadding={8}
        cellSpacing={0}
        style={style.tableContainer}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>CreatedAt</th>
            <th>UpdatedAt</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {new Date(user.createdAt).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </td>
              <td>
                {new Date(user.updatedAt).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>{" "}
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const style = {
  container: {
    width: "90%",
    margin: "25px auto",
    textAlign: "center",
  },
  tableContainer: {
    marginTop: "25px",
    width: "100%",
  },
};

export default LocalApi;
