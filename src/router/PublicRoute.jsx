import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const PublicRoute = ({ children }) => {
  const { loggedIn } = useContext(AuthContext);
  return !loggedIn ? children : <Navigate to={"/marvel"}></Navigate>;
};
