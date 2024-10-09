import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";

const root = document.getElementById("home-root");
if (root) {
  ReactDOM.createRoot(root).render(<Home />);
}
