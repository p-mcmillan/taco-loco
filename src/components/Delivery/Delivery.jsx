import { useState } from "react";
import Button from "../Button/Button";
import CustomAlert from "../CustomAlert/CustomAlert";

const Delivery = () => {
  // const handleButtonClick = () => {};

  const [showAlert, setShowAlert] = useState(false);
  const handleAlertClick = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  return (
    <div className="bg-grayTaco h-auto w-[318px] 2xl:w-[468px] 2xl:h-[765px] z-40 mx-[36px] md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="h-[414px] 2xl:ml-[56px] 2xl:mt-[192px] xl:mt-[74px] lg:mt-[74px] 2xl:mr-[55px] ml-[26px] mr-[24px]">
        <div className="h-[49px] w-[290px]">
          <h1 className="text-[38px] 2xl:text-[48px] uppercase font-Chango font-bold text-[#D6134B] 2xl:mb-[33px] mt-[25px] 2xl:mt 2xl:text-left">
            delivery
          </h1>
        </div>
        <div className="2xl:w-[356px] 2xl:h-[266px] 2xl:mt-[60px] mt-4">
          <p className="text-[16px]  font-Roboto text-left  2xl:text-[19px]  leading-[32px] ">
            If you are looking for delivery, please click below and you can
            order directly from Uber eats. Just click the link below
          </p>
        </div>

        <div className=" font-Helvetica font-bold text-[19px] 2xl:mt-1 pt-[155px] xl:pt-[143px] lg:pt-[143px] 2xl:pt-0">
          <div className="2xl:text-left text-center">
            <Button
              onClick={handleAlertClick}
              // onClick={handleButtonClick}
              className="h-10 w-48 font-medium"
              type="submit"
              style={{
                color: "white",
                fontFamily: "Helvetica",
              }}
            >
              Order Now
            </Button>
          </div>
          {showAlert && (
            <CustomAlert
              className="font-bold"
              message="Please call 604-733-3323 to place an order or email us below"
              onClose={handleCloseAlert}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Delivery;
