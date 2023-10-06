import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { menuItems } from "./assets/menu/menu";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Delivery from "./components/Delivery/Delivery";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Hero2 from "./components/Hero/Hero2";
import Nav from "./components/Nav/Nav";
import Gallery from "./components/Gallery/Gallery";
import NotFound from "./pages/404/notFound";
import Home from "./pages/Home/Home";

function App() {
  const [menuItemsData, setmenuItemsData] = useState(menuItems);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home menuItemsData={menuItemsData} />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notFound" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
