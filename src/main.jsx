import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import GlobalStyle from "./styles/globalStyles.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
