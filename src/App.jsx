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

function App() {
  const [menuItemsData, setmenuItemsData] = useState(menuItems);

  return (
    <>
      <Nav />
      <Hero />
      {/* <Menu menuItemsData={menuItemsData} /> */}

      {/*  */}
      <div className="flex flex-col items-center  justify-center">
        <div className="flex flex-col md:flex-row gap-0 items-center md:m-0 justify-center md:h-[765px] md:w-[1402px]">
          <Hero2 />
          <About />
          <Delivery />
        </div>
      </div>
      <Contact />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;

// old flex flex-col md:flex-row gap-0 items-center md:m-0 justify-between md:h-[765px] md:w-[1402px]
