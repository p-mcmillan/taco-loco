import { useState, useEffect } from "react";
import logo from "../../assets/logo/Logo - Vert.svg";
import Button from "../Button/Button";
import { useMediaQuery } from "react-responsive";
import "../../styles/css/styles.scss";

const Nav = () => {
  let Links = [
    { name: "Our Menu", link: "/" },
    { name: "Gallery", link: "/" },
    { name: "Contact Us", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  // Use the media query hook to determine if the viewport is md or larger
  const isDesktopOrMd = useMediaQuery({ query: "(min-width: 768px)" });
  const desktop = isDesktopOrMd.toString();
  console.log(isDesktopOrMd, "md open");
  console.log(desktop, "string");
  useEffect(() => {
    const primaryNav = document.querySelector("#main-navigation");
    const desktopHide = document.querySelector("#desktop-navigation");

    if (open) {
      primaryNav.setAttribute("data-visible", "false");
      // primaryNav.setAttribute("aria-expanded", "false");
    } else {
      primaryNav.setAttribute("data-visible", "true");
      // primaryNav.setAttribute("aria-expanded", "true");
    }

    console.log(open, "open");
    console.log(isDesktopOrMd, "isDesktopOrMd");

    // if (isDesktopOrMd) {
    //   desktopHide.setAttribute("hidden-visible", "true");
    // } else {
    //   desktopHide.setAttribute("hidden-visible", "false");
    // }
  }, [open, isDesktopOrMd]); // Run this effect whenever the 'open' state changes

  // Rest of your component code...

  return (
    <header className="md:h-[81px] h-[54px] w-screen z-50 fixed bg-black">
      <div className=" md:ml-[148px] md:mr-[140px] md:flex md:items-center justify-between h-full  ml-[20px]">
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
              // Apply the translate-x class only if the viewport is not md or larger
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
            {/*   TO HIDE BUTTON hidden md:flex */}

            {/* Desktop NAV */}

            <div className="text-right hidden md:flex">
              <Button
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
            className={`mobile-navigation-toggle pr-[34px] pd:mr-0 md:gap-20 md:flex fixed bg-black md:left-auto md:top-auto md:bottom-auto md:right-auto md:relative ${
              // Apply the translate-x class only if the viewport is not md or larger
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
            {/*   TO HIDE BUTTON hidden md:flex */}

            {/* Desktop NAV */}

            <div className="text-right hidden md:flex">
              <Button
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
