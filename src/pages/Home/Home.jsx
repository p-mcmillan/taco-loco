import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "../../App.css";
import { useState } from "react";

import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Delivery from "../../components/Delivery/Delivery";
import Hero from "../../components/Hero/Hero";
import Menu from "../../components/Menu/Menu";
import Hero2 from "../../components/Hero/Hero2";

import Gallery from "../../components/Gallery/Gallery";
const Home = (props) => {
  console.log(props, "home");
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
      <Contact />
      <Gallery />
    </>
  );
};
Home.propTypes = {
  menuItemsData: PropTypes.array.isRequired,
};

export default Home;
