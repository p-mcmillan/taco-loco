import Button from "../Button/Button";

const About = () => {
  const emailAddress = "example@example.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const phoneNumber = "604-733-3323";

  return (
    <div className="bg-white h-[414px] flex flex-col justify-between md:justify-normal mx-9 md:mx-0 md:w-[467px] md:h-[765px]">
      <h1 className="text-[40px] md:text-[48px] font-Chango text-[#D6134B] uppercase text-center mt-[16px] md:mt-[160px] mx-0 md:static md:top-[30%]">
        about us
      </h1>

      <div className="mx-6 mb-16">
        {" "}
        {/* Add marginBottom: "16px" */}
        {/* font Roboto, Regular */}
        <div className="md:w-[356px] md:h-[333px] md:flex md:justify-center md:static md:top-[30%] md:mx-[50px]">
          <p className="text-[16px] md:text-[19px] text-left mb-4 md:mb-0 font-Roboto leading-[32px] md:mt-[33px]">
            Welcome to Taco Loco, where our passion for fresh ingredients and
            bold flavors comes together to redefine the taco experience in the
            vibrant heart of Kitsilano. If you are looking for reservations or
            have general inquiries, please call
            <br />{" "}
            <a className="text-[#2EA9A3] underline" href={`tel:${phoneNumber}`}>
              {phoneNumber}
            </a>
          </p>
        </div>
        <Button
          className="h-10 w-48 font-Helvetica text-[17px]"
          type="submit"
          style={{
            backgroundColor: "#EB7513",
            color: "white",
            height: "42px",
            width: "196px",
            //marginLeft: "50px",
          }}
          onClick={handleEmailClick}
        >
          Email Us
        </Button>
      </div>
    </div>
  );
};

export default About;
