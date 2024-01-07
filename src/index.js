import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import ErrorBoundary from "./components/ErrorBoundary.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
