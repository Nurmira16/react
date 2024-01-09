import MainPage from "../pages/MainPage";
import AboutPage from "./AbouPage";
import ID from "./ID";

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
