import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import { menuItems } from "./assets/menu/menu";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import NotFound from "./pages/404/notFound";
import Home from "./pages/Home/Home";
import "./App.css";
import "./styles/css/styles.css";

function App() {
  const [menuItemsData] = useState(menuItems);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/taco-loco/" element={<Home menuItemsData={menuItemsData} />} />
        <Route path="/taco-loco/notFound/" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/taco-loco/notFound/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
