import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const hadleLoginClick = () => {
    if (isAuth) {
      logout();
    } else {
      navigate("/login");
    }
    // navigate("/login");
  };
  return (
    <div style={{ padding: "10px", display: "flex", gap: "10px" }}>
      Navbar
      <Link to="">Home</Link>
      <Link to="/feeds">Feeds</Link>
      <Link to="/posts">Posts</Link>
      <button onClick={hadleLoginClick}>{isAuth ? "Logout" : "Login"}</button>
      <Link to=""></Link>
    </div>
  );
};

export default Navbar;
