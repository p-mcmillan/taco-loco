import Button from "../Button/Button";

const Delivery = () => {
  return (
    <div className="bg-[#E8E8E8] h-[414px] flex flex-col justify-between md:justify-normal mx-9 md:mx-0 md:w-[467px] md:h-[765px]">
      <div className="mx-6">
        <h1 className="text-[40px] md:text-[48px] uppercase font-Chango text-[#D6134B] text-center mt-[24px] md:mt-[160px]">
          delivery
        </h1>
        {/* font Roboto, Regular */}
        <div className="md:w-[356px] md:h-[333px] md:flex md:justify-center md:mx-[50px]">
          <p className="text-[16px] md:text-[19px] font-Roboto text-left mb-8 md:mb-0 leading-[32px] md:mt-[33px]">
            If you are looking for delivery, please click below and you can
            order directly from Uber eats. Just click the link below
          </p>
        </div>
      </div>

      <div className="mx-6 mb-8 font-Helvetica text-[17px]">
        <Button
          className="h-10 w-48"
          type="submit"
          style={{
            backgroundColor: "#EB7513",
            color: "white",
            height: "42px",
            width: "196px",
            // marginLeft: "50px",
          }}
        >
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default Delivery;
