import { useState } from "react";
import Button from "../Button/Button";
import { navLinks } from "../../constants";
import { tacoLogo, tacoSkull } from "../../assets";
import "../../styles/css/styles.css";
import CustomAlert from "../CustomAlert/CustomAlert";

const Nav = () => {
  // const handleButtonClick = () => {};

  const [showAlert, setShowAlert] = useState(false); // State to manage the visibility of the custom alert

  const handleAlertClick = () => {
    setShowAlert(true); // Show the custom alert when the button is clicked
  };

  const handleCloseAlert = () => {
    setShowAlert(false); // Close the custom alert when the close button is clicked
  };

  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };

  const handleLinkClick = () => {
    toggleSlider();
  };

  return (
    <div className="shadow-md w-full z-50 fixed bg-blue top-0 left-0 bg-black md:h-[81px] h-[54px]">
      <div className="md:flex items-center bg-black w-full justify-between relative py-4 2xl:pl-[148.23px] 2xl:pr-[140px] px-7 md:h-[81px] h-[54px]">
        <div>
          <img
            className="nav-skull fixed 2xl:left-[80px] 2xl:top-[17px] xl:left-[80px] xl:top-[17px] lg:left-[30px] lg:top-[17px] md:top-[17px] top-17 left-5"
            src={tacoSkull}
            alt="skull"
          />
        </div>
        <div className="2xl:w-[282px] w-[40%] md:fixed flex justify-center md:mt-[15.29px] md:mb-4 md:ml-0 ml-7">
          {/* <img
            className="nav-skull fixed left-[80px] top-[17px]"
            src={tacoSkull}
            alt="skull"
          /> */}
          <a href="/">
            <img className="" src={tacoLogo} alt="logo" />
          </a>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute top-[13px] left-[341.52px] md:hidden"
        >
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`absolute md:hidden z-50 right-[230.56px] top-[19px] ${
            open ? "" : "hidden"
          }`}
        >
          <ion-icon name="close-outline"></ion-icon>
        </div>

        <div
          className="bg-black text-right md:text-center
        "
        >
          <ul
            className={` w-auto md:h-full h-screen md:flex md:items-center  md:pb-0 pb-12 absolute md:static bg-black md:z-auto left-0 md:w-auto md:pl-0 ${
              open ? "left-[30%] top-0 bottom-0 right-0" : "left-[100%]"
            }`}
          >
            <div className="bg-black text-[19px] font-bold text-white md:flex md:pt-0 pt-[20px] text-right xl:gap-20 lg:gap-10 2xl:gap-28 pr-[40px] md:pr-0 items-center">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="md:ml-8 md:my-0 my-7 bg-black pb-[44px] md:pb-0"
                >
                  <a
                    href={`#${nav.id}`}
                    className=" bg-black font-Roboto font-bold text-[19px]"
                    onClick={handleLinkClick}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
              <Button
                onClick={handleAlertClick}
                // onClick={handleButtonClick}
                className="font-bold font-Roboto"
                style={{
                  color: "white",
                  height: "45px",
                  width: "145px",
                  padding: "0",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                }}
              >
                Order Now
              </Button>
              {showAlert && (
                <CustomAlert
                  message="Please call 604-733-3323 to place an order or email us below"
                  onClose={handleCloseAlert}
                />
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
