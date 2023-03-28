import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../shared";
import { Marvel, Dc, Search, SpecificHero } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar></Navbar>

      <div className="container">
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
            path="/search"
            element={<Search></Search>}
          ></Route>
          <Route
            path="/hero/:id"
            element={<SpecificHero></SpecificHero>}
          ></Route>
          <Route
            path="/"
            element={<Navigate to={"/marvel"}></Navigate>}
          ></Route>
        </Routes>
      </div>
    </>
  );
};
