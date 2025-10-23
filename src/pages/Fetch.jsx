import React, { useEffect } from "react";

function Fetch() {
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return <div>Fetch</div>;
}

export default Fetch;
