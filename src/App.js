import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/SideLinks/MainContent";
import Dashboard from "./components/SideLinks/Dashboard";
import Recipes from "./components/SideLinks/Recipes";
import Blog from "./components/SideLinks/Blog";
import Templates from "./components/SideLinks/Templates";
import Favorites from "./components/SideLinks/Favorites";
import CustomTemplate from "./components/SideLinks/CustomTemplate";
import Integrations from "./components/SideLinks/Integrations";
import Semrush from "./components/SideLinks/Semrush";

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/custom" element={<CustomTemplate />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/semrush" element={<Semrush />} />
      </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
