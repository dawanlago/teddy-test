import React from "react";
import ReactDOM from "react-dom/client";
import List from "./List";

const root = document.getElementById("list-root");
if (root) {
  ReactDOM.createRoot(root).render(<List />);
}
