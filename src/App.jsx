import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { menuItems } from "./assets/menu/menu";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import NotFound from "./pages/404/notFound";
import Home from "./pages/Home/Home";

function App() {
  const [menuItemsData] = useState(menuItems);

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
