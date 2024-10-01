// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// main css
import "./global.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// router
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
