import { lazy } from "react";
// import MainPage from "../pages/MainPage";
// import AboutPage from "./AbouPage";

function delay(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
const ID = lazy(() => delay(import("../components/ID")));
const MainPage = lazy(() => delay(import("../pages/MainPage")));
const AboutPage = lazy(() => delay(import("../components/AbouPage")));

const PATHS = {
  MAIN: "/",
  ABOUT: "/about",
  ID: "/:id",
};

export const routes = [
  { path: PATHS.MAIN, element: <MainPage /> },
  { path: PATHS.ABOUT, element: <AboutPage /> },
  { path: PATHS.ID, element: <ID /> },
];
