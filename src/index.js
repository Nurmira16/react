import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import ErrorBoundary from "./components/ErrorBoundary.js";
import { BrowserRouter } from "react-router-dom";
import StoreProvider from "./components/StoreProvider.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <StoreProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StoreProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
