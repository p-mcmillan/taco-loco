import Button from "../Button/Button";

const Delivery = () => {
  const handleButtonClick = () => {
    alert("Please call 604-733-3323 to order!");
  };
  return (
    <div className="bg-grayTaco h-auto w-[318px] md:w-[468px] md:h-[765px] z-40 mx-[36px] 2xl:mx-0">
      <div className="h-[414px] md:ml-[56px] md:mt-[192px] md:mr-[55px] ml-[26px] mr-[24px]">
        <div className="h-[49px] w-[290px]">
          <h1 className="text-[40px] md:text-[48px] uppercase font-Chango text-[#D6134B] md:mb-[33px] mt-[25px] md:mt">
            delivery
          </h1>
        </div>
        <div className="md:w-[356px] md:h-[266px] md:mt-[60px] mt-4">
          <p className="text-[16px]  font-Roboto text-left  md:text-[19px]  leading-[32px] ">
            If you are looking for delivery, please click below and you can
            order directly from Uber eats. Just click the link below
          </p>
        </div>

        <div className=" font-Helvetica font-bold text-[19px] md:mt-1 pt-[155px] md:pt-0">
          <Button
            onClick={handleButtonClick}
            className="h-10 w-48"
            type="submit"
            style={{
              color: "white",
            }}
          >
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
