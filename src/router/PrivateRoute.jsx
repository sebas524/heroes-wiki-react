import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { loggedIn } = useContext(AuthContext);
  return loggedIn ? children : <Navigate to={"/login"}></Navigate>;
};
