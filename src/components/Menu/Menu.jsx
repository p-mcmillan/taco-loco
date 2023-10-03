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
    <div className="text-white mx-9 md:w-[1164px] md:mx-auto md:pb-[127px]">
      {/* font Chango, Regular */}
      <h1 className="text-[40px] text-center font-Chango md:text-[78px]">
        Our Menu
      </h1>
      <div className="">
        {/* Chapillada doesnt come in 38px closest is 36px*/}
        <p className=" uppercase text-[48px] font-Chapillada text-[#2EA9A3] pb-6 pt-9">
          enslasa + shared
        </p>
        {/* Desktop */}
        <div className="hidden md:block text-[27px] space-y-6 font-Roboto pb-6">
          <div>
            <p className="md:text-[27px]">
              TIJUANA CAESAR SALAD, CHARRED ROMAINE HEARTS, CROUTONS <br />{" "}
              CAPER DRESSING………………………………………………………………………………………………………..SM 9.00 LG
              18.00
            </p>
          </div>
          <div>
            <p className="md:text-[27px]">
              ENSALADA DE FRIJOLES, MIXED BEANS W/ PEPPERS, TOMATOES, CUCUMBER,
              QUESO FRESCO
              CHEESE………………………………………………………………………………………………………………………….SM 9.00 LG
              18.00
            </p>
          </div>
          <div>
            <p className="md:text-[27px]">
              TACO LOCO ORGANO VINAIGRETTE………………………………………………………………………..SM 9.00
              LG 18.00 Add side taco meat to any salad SM 5.50 LG 11.50
            </p>
          </div>
          <div>
            <p className="md:text-[27px]">
              GRILLED CHORIZO + POTATOES, HUANCAINA SAUCE, HOUSE
              PICKLES………………………………..15.50
            </p>
          </div>
          <div>
            <p className="md:text-[27px]">
              QUESO FUNDITO, CRISPY GARBANZO BEANS,
              TOSTADA………………………………………………………….13.50
            </p>
          </div>
          <div>
            <p className="md:text-[27px]">
              TACO LOCO CHEESE QUESADILLA W/ SOUR CREAM + PICKLED RED
              ONIONS…………………….12.50
            </p>
          </div>
          <div>
            <p className="md:text-[27px]">
              SINALOA STYLE SALMON CEVICHE, SLICED AVOCADO,
              TOSTADA…………………………………………14.00
            </p>
          </div>
          <div>
            <p className="md:text-[27px]">
              TACO LOCO GUACAMOLE SERVED W/ FRESH
              TORTILLAS……………………………………………………….12.50
            </p>
          </div>
        </div>
        <div className="md:hidden">
          {menuItemsData
            .filter((section) => section.name === "Enslasa Shared")
            .map((section, index) => (
              <div key={index} className="">
                {section.menu.map((menuItem, itemIndex) => (
                  <div
                    className="pb-6 font-Roboto uppercase text-[17px] leading-[28px] md:text-[27px]"
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
      <div className="">
        <div className="mt-4 mb-2">
          <p className="uppercase text-[48px] font-Chapillada text-[#2EA9A3] pt-3 leading-[36px]">
            tacos
          </p>
          <p className="uppercase text-[17px] font-Roboto text-[#2EA9A3] font-bold pb-6 leading-[36px] md:text-[27px]">
            choice of corn or flour tortillas:
          </p>
        </div>

        {/* Desktop */}

        <div className="hidden md:block text-[27px] space-y-9 font-Roboto pb-6">
          <div>
            <p>
              SMOKED BEEF BRISKET BARBACOA, PICKLED RED ONIONS, QUESO
              FRESCO…………… 8.00 each{" "}
            </p>
          </div>
          <div>
            <p>
              FRASER VALLEY PORK CARNITAS, FRESH ONIONS, CILANTRO, SALSA
              VERDE……………6.50 each
            </p>
          </div>
          <div>
            <p>
              ORGANIC CHICKEN TINGA (CHIPOTLE), TACO LOCO SLAW, SALSA
              FRESCA……………….7.50 each{" "}
            </p>
          </div>
          <div>
            <p>
              CHARRED AVOCADO + BLACK BEANS, FRIED ONIONS, TOMATO PICO DE
              GALLO………7.50 each{" "}
            </p>
          </div>

          <div>
            <p>
              WILD PINK SALMON AL PASTOR, TACO LOCO SLAW, PINEAPPLE+MANGO
              SALSA……8.00 each
            </p>
          </div>
        </div>
        <div className="md:hidden">
          {menuItemsData
            .filter((section) => section.name === "tacos")
            .map((section, index) => (
              <div key={index} className="">
                {section.menu.map((menuItem, itemIndex) => (
                  <div
                    className="pb-6 uppercase font-Roboto text-[17px] leading-[28px] md:text-[27px]"
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
      <div className="">
        <p className="uppercase text-[17px] md:text-[27px]">
          <span className="text-[#2EA9A3] font-Roboto font-bold md:mb-6 md:mr-2 block md:inline-block">
            sides 2$ each:
          </span>
          <br className="md:mb-6" />
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
        <div className="hidden md:block text-[27px] space-y-9 font-Roboto pb-6">
          <div>
            <p>
              TOSSED IN CINNAMON + CANE SUGAR W/ CHOICE OF CHOCOLATE SC, SALTED
              CARAMEL, BC BLUEBERRY SC………………….…………10.50
            </p>
          </div>
        </div>

        <div className="md:hidden">
          {menuItemsData
            .filter((section) => section.name === "dessert")
            .map((section, index) => (
              <div key={index} className="">
                {section.menu.map((menuItem, itemIndex) => (
                  <div
                    className="pb-6 uppercase font-Roboto text-[17px] leading-[28px] md:text-[27px]"
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
