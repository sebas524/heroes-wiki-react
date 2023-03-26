import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../auth/pages/Login";
import { Dc } from "../heroes/pages/Dc";
import { Marvel } from "../heroes/pages/Marvel";
import { Navbar } from "../shared";

export const AppRouter = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/marvel"
          element={<Marvel></Marvel>}
        ></Route>
        <Route
          path="/dc"
          element={<Dc></Dc>}
        ></Route>
        <Route
          path="/login"
          element={<Login></Login>}
        ></Route>
        <Route
          path="/*"
          element={<Navigate to={"/marvel"}></Navigate>}
        ></Route>
      </Routes>
    </>
  );
};
