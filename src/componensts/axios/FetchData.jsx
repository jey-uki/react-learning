import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getusers();
  }, []);

  const getusers = async () => {
    try {
      const responce = await axios.get(
        "https://express-mongo-connection-sigma.vercel.app/api/users"
      );
      const userData = responce.data.users;
      console.log(userData);
      setUsers(userData);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="content-container">
        <h1>FetchData</h1>
        <div className="content-body">Api call using axios</div>
      </div>

      <table border={1} cellPadding={5} cellSpacing={0} align="center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>isActive</th>
            <th>CreatedAt</th>
            <th>UpdatedAt</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.isActive ? "Yes" : "No"}</td>
              <td>
                {new Date(user.createdAt).toLocaleString("en-US", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "numeric",
                  weekday: "short",
                  minute: "2-digit",
                })}
              </td>
              <td>
                {new Date(user.createdAt).toLocaleString("en-US", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FetchData;
