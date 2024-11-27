import React from "react";
import Header from "../Header";
import Details from "./Details";
import Footer from "../Footer";

// Main Details component
const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  password: "securepassword123",
  idNumber: "12345678",
};

const UserDetails = () => {
  return (
    <>
      <Header />
      <div className="UserDetails">
        <h1>User Details</h1>
        <Details user={user} />
      </div>
      <Footer />
    </>
  );
};

export default UserDetails;
