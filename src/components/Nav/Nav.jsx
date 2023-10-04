import { useState } from "react";
import logo from "../../assets/logo/Logo - Vert.svg";
import Button from "../Button/Button";

const Nav = () => {
  let Links = [
    { name: "Our Menu", link: "/" },
    { name: "Gallery", link: "/" },
    { name: "Contact Us", link: "/" },
  ];

  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  return (
    // fixed overflow-hidden
    <header className="md:flex md:justify-between md:items-center md:h-[81px] z-40 fixed overflow-hidden w-[1680px] bg-black">
      <div className="">
        <img className="md:ml-[148px]" src={logo} alt="logo" />
      </div>

      <div
        onClick={() => setOpen(!open)}
        className="absolute  top-[26.46px] right-[341.52px]"
      >
        <ion-icon name="menu-outline"></ion-icon>
      </div>
      <div
        onClick={() => setClose(!close)}
        className="absolute md:hidden z-50 right-[210.66px] top-[19px]"
      >
        {" "}
        <ion-icon name="close-outline"></ion-icon>
      </div>

      <nav className="md:mr-[142px] flex-col md:flex">
        <ul className="gap-9 md:flex fixed bg-black z-40 left-[27.5%] top-0 bottom-0 right-0 md:left-auto md:top-auto md:bottom-auto md:right-auto md:relative">
          {Links.map((link) => (
            <li
              key={link.name}
              className=" md:my-0 my-12 text-white font- text-right mr-[34px] md:flex md:items-center"
            >
              <a
                href={link.link}
                className=" font-Roboto font-bold text-[19px]"
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className="font-Roboto font-bold text-[19px]">
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
    </header>
  );
};

export default Nav;
