// import { useState } from "react";
// import logo from "../../assets/logo/Logo - Vert.svg";

// const Nav = () => {
//   let Links = [
//     { name: "Our Menu", link: "/" },
//     { name: "About Us", link: "/" },
//     { name: "Delivery", link: "/" },
//     { name: "Contact Us", link: "/" },
//   ];

//   return (
//     <header className="md:flex md:justify-between md:items-center md:h-[81px]">
//       <div className="">
//         <img className=" md:ml-[148px] " src={logo} alt="logo" />
//       </div>

//       <nav className="md:mr-[142px] flex-col md:flex-row">
//         <ul className="gap-8 text-white font-Roboto bold text-[19px] fixed bg-black z-50 left-[30%] top-0 bottom-0 right-0">
//           {Links.map((link) => (
//             <li key={link.name} className="">
//               <a href={link.link} className="">
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Nav;

import { useState } from "react";
import logo from "../../assets/logo/Logo - Vert.svg";

const Nav = () => {
  let Links = [
    { name: "Our Menu", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Delivery", link: "/" },
    { name: "Contact Us", link: "/" },
  ];

  return (
    <header className="md:flex md:justify-between md:items-center md:h-[81px]">
      <div className="">
        <img className="md:ml-[148px]" src={logo} alt="logo" />
      </div>

      <nav className="md:mr-[142px] flex-col md:flex">
        <ul className="gap-8  md:flex fixed bg-black z-50 left-[30%] top-0 bottom-0 right-0 md:left-auto md:top-auto md:bottom-auto md:right-auto md:relative">
          {Links.map((link) => (
            <li
              key={link.name}
              className=" md:my-0 my-12  text-white font-Roboto bold text-[19px] text-right mr-[34px]"
            >
              <a href={link.link} className="">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
