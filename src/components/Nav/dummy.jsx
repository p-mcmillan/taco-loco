import { useState } from "react";
import logo from "../../assets/logo/Logo - Vert.svg";

const Nav = () => {
  let Links = [
    { name: "Our Menu", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Delivery", link: "/" },
    { name: "Contact Us", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  return (
    <header className="md:flex md:justify-between md:items-center md:h-[81px] fixed overflow-hidden	">
      <div className="">
        <img className="md:ml-[148px]" src={logo} alt="logo" />
      </div>

      <div
        onClick={handleMenuToggle}
        className="absolute z-50 top-[26.46px] right-[341.52px] cursor-pointer"
      >
        <ion-icon name="menu-outline"></ion-icon>
      </div>

      <nav
        className={`md:mr-[142px] ${
          open ? "block" : "hidden"
        } md:flex md:flex-col md:items-end`}
      >
        <ul className="gap-8 md:mr-8 text-white font-Roboto font-bold text-[19px]">
          {Links.map((link) => (
            <li key={link.name}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
        <div
          onClick={handleMenuToggle}
          className="md:hidden fixed z-50 right-[210.66px] top-[19px] cursor-pointer"
        >
          <ion-icon name="close-outline"></ion-icon>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
