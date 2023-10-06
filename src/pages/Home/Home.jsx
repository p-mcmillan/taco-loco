import PropTypes from "prop-types";
import { useState } from "react";
import "../../App.css";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Delivery from "../../components/Delivery/Delivery";
import Hero from "../../components/Hero/Hero";
import Menu from "../../components/Menu/Menu";
import Hero2 from "../../components/Hero/Hero2";
import Gallery from "../../components/Gallery/Gallery";
import PopUp from "../../components/PopUp/PopUp";

const Home = (props) => {
  const [openPopup, setOpenPopup] = useState(false);

  const HandleRemovePopUp = () => setOpenPopup(false);
  return (
    <>
      <Hero />
      <Menu menuItemsData={props.menuItemsData} />
      <div className="flex flex-col items-center z-30 justify-center">
        <div className="flex flex-col md:flex-row gap-0 items-center md:m-0 justify-center md:h-[765px] md:w-[1402px]">
          <Hero2 />
          <About />
          <Delivery />
        </div>
      </div>
      <Gallery setOpenPopup={setOpenPopup} />

      <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} />

      <Contact />
    </>
  );
};
Home.propTypes = {
  menuItemsData: PropTypes.array.isRequired,
};

export default Home;
