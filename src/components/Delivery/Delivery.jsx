import Button from "../Button/Button";

const Delivery = () => {
  return (
    <div className="bg-grayTaco h-[414px] w-[318] md:w-[467px] md:h-[765px] ">
      <div className="md:ml-[56px] md:mt-[192px] md:mr-[55px]">
        <div className="">
          <h1 className="text-[40px] md:text-[48px] uppercase font-Chango text-[#D6134B] md:mb-[33px]">
            delivery
          </h1>
        </div>
        <div className="md:w-[356px] md:h-[266px] md:mt-[20px]">
          <p className="text-[16px]  font-Roboto text-left  md:text-[19px]  leading-[32px] ">
            If you are looking for delivery, please click below and you can
            order directly from Uber eats. Just click the link below
          </p>
        </div>

        <div className=" font-Helvetica font-bold text-[19px]">
          <Button
            className="h-10 w-48"
            type="submit"
            style={{
              color: "white",
              height: "51px",
              width: "240px",
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
