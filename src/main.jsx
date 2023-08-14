import React from "react";
import { createRoot } from "react-dom/client";
import App from "../src/components/App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
