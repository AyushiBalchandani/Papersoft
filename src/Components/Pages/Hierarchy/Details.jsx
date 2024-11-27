// src/UserDetails.js
import React from "react";

const Details = ({ user }) => {
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
      <p>ID Number: {user.idNumber}</p>
    </div>
  );
};

export default Details;
