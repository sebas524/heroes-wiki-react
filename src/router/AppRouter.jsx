import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../auth/pages/";
import { HeroesRoutes } from "../heroes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<Login></Login>}
        ></Route>
        <Route
          path="/*"
          element={<HeroesRoutes></HeroesRoutes>}
        ></Route>
      </Routes>
    </>
  );
};
