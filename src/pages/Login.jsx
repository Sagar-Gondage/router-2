import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [loginCreds, setLoginCreds] = useState({
    email: "",
    password: ""
  });

  const { isAuth, login } = useContext(AuthContext);

  const onChange = (e) => {
    const { name, value } = e.target;

    setLoginCreds({
      ...loginCreds,
      [name]: value
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    login();
    if (isAuth) navigate("/");
    console.log("Hi ");
    setLoginCreds({
      ...loginCreds,
      email: "",
      password: ""
    });
  };
  return (
    <div>
      Login
      <div>
        <form onSubmit={handleOnSubmit}>
          <input
            name="email"
            type="text"
            value={loginCreds.email}
            placeholder="email"
            onChange={onChange}
          />
          <input
            name="password"
            type="text"
            value={loginCreds.password}
            placeholder="password"
            onChange={onChange}
          />
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
