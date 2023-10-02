// import PropTypes from "prop-types";

// const Menu = ({ menuItemsData }) => {
//   return (
//     <div className="text-white mx-9">
//       <h1 className="text-[40px] text-center">Our Menu</h1>

//       {menuItemsData.map((section, index) => (
//         <div key={index}>
//           <h3>{section.name}</h3>
//           {section.menu.map((menuItem, itemIndex) => (
//             <div key={itemIndex}>
//               <p>{menuItem.item}</p>
//               <p>{menuItem.price}</p>
//               {menuItem.side && <p>{menuItem.side}</p>}
//               {menuItem.sidePrice && <p>{menuItem.sidePrice}</p>}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// Menu.propTypes = {
//   menuItemsData: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       menu: PropTypes.arrayOf(
//         PropTypes.shape({
//           item: PropTypes.string.isRequired,
//           price: PropTypes.string.isRequired,
//           side: PropTypes.string,
//           sidePrice: PropTypes.string,
//         })
//       ).isRequired,
//     })
//   ).isRequired,
// };

// export default Menu;

import PropTypes from "prop-types";

const Menu = ({ menuItemsData }) => {
  return (
    <div className="text-white mx-9">
      {/* font Chango, Regular */}
      <h1 className="text-[40px] text-center font-Chango">Our Menu</h1>
      <div className="">
        {/* Chapillada doesnt come in 38px closest is 36px*/}
        <p className=" uppercase text-[48px] font-Chapillada text-[#2EA9A3] pb-6 pt-9">
          enslasa + shared
        </p>
        {menuItemsData
          .filter((section) => section.name === "Enslasa Shared")
          .map((section, index) => (
            <div key={index} className="">
              {section.menu.map((menuItem, itemIndex) => (
                <div
                  className="pb-6 font-Roboto uppercase text-[17px] leading-[28px]"
                  key={itemIndex}
                >
                  <p>{menuItem.item}</p>
                  <p className="font-bold">{menuItem.price}</p>
                  {menuItem.side && <p>{menuItem.side}</p>}
                  {menuItem.sidePrice && (
                    <p className="font-bold">{menuItem.sidePrice}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
      </div>
      <div className="">
        <div className="mt-4 mb-2">
          <p className="uppercase text-[48px] font-Chapillada text-[#2EA9A3] pt-3 leading-[36px]">
            tacos
          </p>
          <p className="uppercase text-[17px] font-Roboto text-[#2EA9A3] font-bold pb-6 leading-[36px]">
            choice of corn or flour tortillas:
          </p>
        </div>
        {menuItemsData
          .filter((section) => section.name === "tacos")
          .map((section, index) => (
            <div key={index} className="">
              {section.menu.map((menuItem, itemIndex) => (
                <div
                  className="pb-6 uppercase font-Roboto text-[17px] leading-[28px]"
                  key={itemIndex}
                >
                  <p>{menuItem.item}</p>
                  <p className="font-bold">{menuItem.price}</p>
                  {menuItem.side && <p>{menuItem.side}</p>}
                  {menuItem.sidePrice && (
                    <p className="font-bold">{menuItem.sidePrice}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
      </div>
      <div>
        <p className="uppercase text-[17px]">
          <span className="text-[#2EA9A3] font-Roboto font-bold">
            sides 2$ each:
          </span>
          <br />
          <span className="font-Chapillada">s</span>alsa verde, salsa roja,
          spicy habanero, pickled red onions, pineapple + mango salsa, tomato
          pico de gallo.
        </p>
      </div>
      <div className="">
        {/* Chapillada doesnt come in 38px closest is 36px*/}
        <p className=" uppercase text-[48px] font-Chapillada text-[#2EA9A3] pb-6 pt-9">
          dessert
        </p>
        {menuItemsData
          .filter((section) => section.name === "dessert")
          .map((section, index) => (
            <div key={index} className="">
              {section.menu.map((menuItem, itemIndex) => (
                <div
                  className="pb-6 uppercase font-Roboto text-[17px] leading-[28px]"
                  key={itemIndex}
                >
                  <p>{menuItem.item}</p>
                  <p className="font-bold">{menuItem.price}</p>
                  {menuItem.side && <p>{menuItem.side}</p>}
                  {menuItem.sidePrice && (
                    <p className="font-bold">{menuItem.sidePrice}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

Menu.propTypes = {
  menuItemsData: PropTypes.arrayOf(
    PropTypes.shape({
      menu: PropTypes.arrayOf(
        PropTypes.shape({
          item: PropTypes.string.isRequired,
          price: PropTypes.string.isRequired,
          side: PropTypes.string,
          sidePrice: PropTypes.string,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default Menu;
