import React, { useEffect, useState } from "react";

const User = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    async function getUser() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/3");
      const data = await res.json();
      if (!res.ok) {
        setError("Error fetching user");
      } else {
        setData(data);
        console.log(data);
      }
    }
    getUser();
  }, []);

  if (error) {
    return <div>Error</div>;
  }
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.username}</p>
      <p>{data.email}</p>
    </div>
  );
};

export default User;
