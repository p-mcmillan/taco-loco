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

function App() {
  const [menuItemsData, setmenuItemsData] = useState(menuItems);

  return (
    <>
      <Nav />
      <Hero />
      <Menu menuItemsData={menuItemsData} />
      <div className="flex flex-col md:flex-row gap-0 items-center md:m-0 justify-center md:h-[765px]">
        <Hero2 />
        <About />
        <Delivery />
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
