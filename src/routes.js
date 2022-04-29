import React from "react";
import HomeScreen from "./screen/HomeScreen";
import AboutScreen from "./screen/AboutScreen";
import ContactScreen from "./screen/ContactScreen";
import SingleCocktailScreen from "./screen/SingleCocktailScreen";
import ErrorScreen from "./screen/ErrorScreen";

export const routes = [
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/about",
    element: <AboutScreen />,
  },
  {
    path: "/contattaci",
    element: <ContactScreen />,
  },
  {
    path: "/cocktail/:id",
    element: <SingleCocktailScreen />,
  },
  {
    path: "*",
    element: <ErrorScreen />,
  },
];
