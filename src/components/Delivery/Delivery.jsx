import Button from "../Button/Button";

const Delivery = () => {
  return (
    <div className="bg-[#E8E8E8] h-[414px] flex flex-col justify-between mx-9">
      <div className="mx-6">
        <h1 className="text-[40px] uppercase font-Chango text-[#D6134B] text-center mt-[24px]">
          delivery
        </h1>
        {/* font Roboto, Regular */}
        <p className="text-[16px] font-Roboto text-left mb-8 leading-[32px]">
          If you are looking for delivery, please click below and you can order
          directly from Uber eats. Just click the link below
        </p>
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
          }}
        >
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default Delivery;
