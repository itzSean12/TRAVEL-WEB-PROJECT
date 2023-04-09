import React from "react";

const Home = ({ user }) => {
  return (
    <div>
      <h1>Welcome {user.name}!</h1>
      <div>Email: {user.email}</div>
    </div>
  );
};

export default Home;
