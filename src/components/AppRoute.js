import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route path={path} element={element}></Route>
      ))}
    </Routes>
  );
};
export default AppRoutes;
