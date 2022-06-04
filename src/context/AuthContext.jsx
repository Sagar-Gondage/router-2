import React, { Children, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  console.log(isAuth);
  const login = () => {
    setIsAuth(true);
    navigate("/feeds");
    console.log(isAuth);
  };

  const logout = () => {
    setIsAuth(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
