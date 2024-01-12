import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element}></Route>
        ))}
      </Routes>
    </Suspense>
  );
};
export default AppRoutes;
