// import "./App.css";
import { useState } from "react";
import { menuItems } from "./assets/menu/menu";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Delivery from "./components/Delivery/Delivery";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";

function App() {
  const [menuItemsData, setmenuItemsData] = useState(menuItems);

  return (
    <>
      <div>Hello</div>
      <Hero />
      <Menu menuItemsData={menuItemsData} />
      <About />
      <Delivery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
