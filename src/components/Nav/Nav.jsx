import { useState } from "react";
import logo from "../../assets/logo/Logo - Vert.svg";

const Nav = () => {
  let Links = [
    { name: "Our Menu", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Delivery", link: "/" },
    { name: "Contact Us", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className=" w-full h-[54px] left-0 text-white md:h-[81px]">
      <div className="md:flex items-center justify-between bg-black py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          <img
            className="h-1/3 w-1/3 md:h-full md:w-full"
            src={logo}
            alt="logo"
          />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-7 bg-black"
            >
              <a
                href={link.link}
                className="bg-black font-Roboto font-bold md:text-[19px] text-white"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
