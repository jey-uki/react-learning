import React, { useEffect, useState } from "react";

function DataTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const userData = await response.json();
    console.log(response.json());
    setUsers(userData);
  };
  return (
    <div>
      <h1>DataTable</h1>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h1>{user.id}: {user.name}</h1>
            <h2>{user.email}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataTable;
