import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/src/Home.tsx";
import List from "../list/src/List.tsx";
import "./index.css";

const rootElement = document.getElementById("home-root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Router>
    </StrictMode>
  );
}
