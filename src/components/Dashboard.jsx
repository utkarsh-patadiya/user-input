import React from 'react';

const Dashboard = ({ userData }) => {
  const { email, name, username, age } = userData;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Email: {email}</p>
      <p>Name: {name}</p>
      <p>Username: {username}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default Dashboard;
