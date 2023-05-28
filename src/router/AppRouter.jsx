import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../auth/pages/";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login></Login>
            </PublicRoute>
          }
        ></Route>
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes></HeroesRoutes>
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};
