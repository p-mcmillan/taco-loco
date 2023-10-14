import PropTypes from "prop-types";
import { chili01, onion01 } from "../../assets/index";

const Menu = (props) => {
  return (
    <div
      id="carte"
      className="text-white mx-9 2xl:w-[1164px] md:mx-auto relative"
    >
      {/* font Chango, Regular */}
      <h1 className="text-[40px] text-center font-Chango md:text-[78px] md:mt-[99px] md:pt-0 md:tracking-normal mt-[33px]">
        Our Menu
      </h1>

      <img
        src={chili01}
        alt="chili"
        className=" hidden md:flex absolute  right-[-260px] top-[-50px]"
      />
      <div className="">
        {/* Chapillada doesnt come in 38px closest is 36px*/}
        <p className=" uppercase text-[48px] font-Chapillada text-greenWrong pb-6 pt-9">
          enslasa + shared
        </p>
        {/* Desktop */}
        <div className="hidden xl:block text-[27px] space-y-6 font-Roboto pb-6">
          <div>
            <p className="md:text-[27px] font-normal">
              TIJUANA CAESAR SALAD, CHARRED ROMAINE HEARTS, CROUTONS <br />{" "}
              CAPER DRESSING………………………………………………………………………………………………………..
              <span className="font-bold">SM 9.00 LG 18.00</span>
            </p>
          </div>
          <div>
            <p className="md:text-[27px]">
              ENSALADA DE FRIJOLES, MIXED BEANS W/ PEPPERS, TOMATOES, CUCUMBER,
              QUESO FRESCO
              CHEESE…………………………….…………………………………………………………………………………………….
              <span className="font-bold">SM 9.00 LG 18.00</span>
            </p>
          </div>
          <div>
            <p className="md:text-[27px]">
              TACO LOCO ORGANO VINAIGRETTE…………………………………………………………………........
              <span className="font-bold">SM 9.00 LG 18.00</span>
              <br />
              Add side taco meat to any salad{" "}
              <span className="font-bold">SM 5.50 LG 11.50</span>
            </p>
          </div>
          <div>
            <p className="md:text-[27px]">
              GRILLED CHORIZO + POTATOES, HUANCAINA SAUCE, HOUSE
              PICKLES………………………………..<span className="font-bold">15.50</span>
            </p>
          </div>
          <div>
            <p className="md:text-[27px]">
              QUESO FUNDITO, CRISPY GARBANZO BEANS,
              TOSTADA………………………………………………………….
              <span className="font-bold">13.50</span>
            </p>
          </div>
          <div>
            <p className="md:text-[27px]">
              TACO LOCO CHEESE QUESADILLA W/ SOUR CREAM + PICKLED RED
              ONIONS…………………….<span className="font-bold">12.50</span>
            </p>
          </div>
          <div>
            <p className="md:text-[27px]">
              SINALOA STYLE SALMON CEVICHE, SLICED AVOCADO,
              TOSTADA…………………………………………<span className="font-bold">14.00</span>
            </p>
          </div>
          <div>
            <p className="md:text-[27px]">
              TACO LOCO GUACAMOLE SERVED W/ FRESH
              TORTILLAS……………………………………………………….
              <span className="font-bold">12.50</span>
            </p>
          </div>
        </div>
        <div className="xl:hidden">
          {props.menuItemsData
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
          <p className="uppercase text-[48px] font-Chapillada text-greenWrong pt-3 leading-[36px]">
            tacos
          </p>
          <p className="uppercase text-[17px] font-Roboto  text-greenWrong font-bold pb-6 leading-[36px] md:text-[27px]">
            choice of corn or flour tortillas:
          </p>
        </div>

        {/* Desktop */}

        <div className="hidden xl:block text-[27px] space-y-9 font-Roboto pb-6">
          <div>
            <p>
              SMOKED BEEF BRISKET BARBACOA, PICKLED RED ONIONS, QUESO
              FRESCO…………… <span className="font-bold">8.00 each</span>
            </p>
          </div>
          <div>
            <p>
              FRASER VALLEY PORK CARNITAS, FRESH ONIONS, CILANTRO, SALSA
              VERDE……………<span className="font-bold">6.50 each</span>
            </p>
          </div>
          <div>
            <p>
              ORGANIC CHICKEN TINGA (CHIPOTLE), TACO LOCO SLAW, SALSA
              FRESCA……………….<span className="font-bold">7.50 each</span>
            </p>
          </div>
          <div>
            <p>
              CHARRED AVOCADO + BLACK BEANS, FRIED ONIONS, TOMATO PICO DE
              GALLO………<span className="font-bold">7.50 each</span>
            </p>
          </div>

          <div>
            <p>
              WILD PINK SALMON AL PASTOR, TACO LOCO SLAW, PINEAPPLE+MANGO
              SALSA……<span className="font-bold">8.00 each</span>
            </p>
          </div>
        </div>
        <div className="xl:hidden">
          {props.menuItemsData
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
          <span className=" text-greenWrong font-Roboto font-bold md:mb-6 md:mr-2 block md:inline-block">
            sides 2$ each:
          </span>
          <br className="md:mb-6" />
          <span className="font-Chapillada">s</span>alsa verde, salsa roja,
          spicy habanero, pickled red onions, pineapple + mango salsa, tomato
          pico de gallo.
        </p>
      </div>
      <div className="md:h-[400px]">
        {/* Chapillada doesnt come in 38px closest is 36px*/}
        <p className=" uppercase text-[48px] font-Chapillada  text-greenWrong pb-6 pt-9">
          dessert
        </p>
        <div className="hidden xl:block text-[27px] space-y-9 font-Roboto pb-6">
          <div>
            <p>
              FRESH CHURROS TOSSED IN CINNAMON + CANE SUGAR <br /> W/ CHOICE OF
              CHOCOLATE SC, SALTED CARAMEL, BC BLUEBERRY SC.………………….…………
              <span className="font-bold">10.50</span>
            </p>
          </div>
        </div>

        <img
          src={onion01}
          alt="onion"
          className=" right-[-500px] top-[1490px] z-0 object-contain absolute overflow-hidden	"
        />

        <div className="xl:hidden">
          {props.menuItemsData
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
Menu.defaultProps = {
  menuItemsData: [],
};

export default Menu;
