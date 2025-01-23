import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000"; // Backend URL
axios.defaults.withCredentials = true; // Send cookies with requests

createRoot(document.getElementById("root")).render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
);
