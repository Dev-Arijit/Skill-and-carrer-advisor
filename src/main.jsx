import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Include extension
import "@fortawesome/fontawesome-free/css/all.min.css"; // only if installed via npm

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
