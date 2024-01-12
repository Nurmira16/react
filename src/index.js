import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import ErrorBoundary from "./components/ErrorBoundary.js";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import StoreProvider from "./components/StoreProvider.js";
import { routes6 } from "./components/routes.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <StoreProvider>
        {/* <RouterProvider router={routes6}></RouterProvider> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StoreProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
