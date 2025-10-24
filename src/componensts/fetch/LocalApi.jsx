import React, { useEffect, useState } from "react";

function LocalApi() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(
      "https://express-mongo-connection-sigma.vercel.app/api/users"
    );
    const userData = await response.json();
    console.log(userData);
    setUsers(userData.data);
  };

  return (
    <>
      <table border={1} cellPadding={8} cellSpacing={0} style={style.tableContainer}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>CreatedAt</th>
            <th>UpdatedAt</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
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
              <td>{new Date(user.updatedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

const style = {
    tableContainer: {
    // width: "90%",
    margin: "25px auto"
    }
}

export default LocalApi;
