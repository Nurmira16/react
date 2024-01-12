import { lazy } from "react";
import { Link, Outlet, createBrowserRouter } from "react-router-dom";
// import MainPage from "../pages/MainPage";
// import AboutPage from "./AbouPage";

// function delay(promise) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 500);
//   }).then(() => promise);
// }

// const ID = lazy(() => delay(import("../components/ID")));

const ID = lazy(() => import("../components/ID"));
const MainPage = lazy(() => import("../pages/MainPage"));
const AboutPage = lazy(() => import("../components/AbouPage"));

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

// export const routes6 = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <AboutPage />
//         <Link to="main">Main</Link>
//         <Outlet />
//       </div>
//     ),
//     children: [
//       {
//         path: "/main",
//         element: (
//           <div>
//             <MainPage />;<Link to="/">Back</Link>
//           </div>
//         ),
//       },
//     ],
//   },
// ]);
