import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import logo from "../../assets/logo/Logo - Vert.svg";
import Button from "../Button/Button";
import skull from "../../assets/logo/TacoLoco_logo.svg";
import "../../styles/css/styles.scss";

const Nav = () => {
  let Links = [
    { name: "Our Menu", link: "#carte" },
    { name: "Gallery", link: "#gallery" },
    { name: "Contact Us", link: "#contact" },
  ];
  const handleButtonClick = () => {
    alert("This function is not functional yet.");
  };

  const [open, setOpen] = useState(false);

  const isDesktopOrMd = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    const primaryNav = document.querySelector("#main-navigation");

    if (open) {
      primaryNav.setAttribute("data-visible", "false");
    } else {
      primaryNav.setAttribute("data-visible", "true");
    }
  }, [open, isDesktopOrMd]);

  const handleMenuItemClick = () => {
    setOpen(false);
  };

  return (
    <header className="md:h-[81px] h-[54px] w-screen z-50 fixed bg-black">
      <div className=" md:ml-[148px] md:mr-[140px] md:flex md:items-center justify-between h-full  ml-[20px]">
        <div>
          <img
            className="nav-skull fixed left-[80px] top-[17px]"
            src={skull}
            alt="skull"
          />
        </div>
        <div className="md:w-[282px] w-[40%] md:fixed flex justify-center mt-[15.29px] md:mb-4  ">
          <img src={logo} alt="logo" />
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

        <nav id="main-navigation" className=" flex-col md:flex">
          <ul
            data-visible="false"
            aria-expanded="false"
            className={`mobile-navigation-toggle pr-[34px] pd:mr-0 md:gap-20 md:flex fixed bg-black md:left-auto md:top-auto md:bottom-auto md:right-auto md:relative ${
              open && !isDesktopOrMd
                ? "left-[27.5%] top-0 bottom-0 right-0"
                : ""
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className=" md:my-0 my-12 text-white font- text-right md:flex md:items-center"
              >
                <a
                  onClick={handleMenuItemClick}
                  href={link.link}
                  className=" font-Roboto font-bold text-[19px]"
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* Desktop NAV */}

            <div className="text-right hidden md:flex">
              <Button
                onClick={handleButtonClick}
                style={{
                  color: "white",
                  height: "45px",
                  width: "145px",
                  padding: "0",
                }}
              >
                Order Now
              </Button>
            </div>
          </ul>
        </nav>

        {/* DESKTOP VIEW */}

        <nav className=" flex-col hidden md:flex">
          <ul
            data-visible="false"
            aria-expanded="false"
            className={`mobile-navigation-toggle pd:mr-0 md:gap-20 md:flex fixed bg-black md:left-auto md:top-auto md:bottom-auto md:right-auto md:relative ${
              open && !isDesktopOrMd
                ? "left-[27.5%] top-0 bottom-0 right-0"
                : ""
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className=" md:my-0 my-12 text-white font- text-right md:flex md:items-center"
              >
                <a
                  href={link.link}
                  className=" font-Roboto font-bold text-[19px]"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <div className="text-right hidden md:flex">
              <Button
                onClick={handleButtonClick}
                style={{
                  color: "white",
                  height: "45px",
                  width: "145px",
                  padding: "0",
                }}
              >
                Order Now
              </Button>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
