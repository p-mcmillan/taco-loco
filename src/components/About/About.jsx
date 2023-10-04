import Button from "../Button/Button";

const About = () => {
  const emailAddress = "example@example.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const phoneNumber = "   604-733-3323";

  return (
    <div className="bg-white h-[414px] w-[318px] md:w-[468px] md:h-[765px] ">
      <div className="md:ml-[22px] md:mt-[122px]">
        <h1 className="text-[40px] md:text-[48px] font-Chango text-[#D6134B] uppercase md:mb-[33px]">
          tacoloco:
          <br />
          “fun latin”
        </h1>
      </div>
      <div className="md:ml-[71px] md:mb-[181px] md:mr-[21px]">
        <div className="md:w-[356px] md:h-[265px]">
          <p className="text-[16px] md:text-[19px] text-left font-Roboto leading-[32px] ">
            Welcome to Taco Loco, where our passion for fresh ingredients and
            bold flavors comes together to redefine the taco experience in the
            vibrant heart of Kitsilano. If you are looking for reservations or
            have general inquiries, please call
            <span className="md:hidden">
              <br />
            </span>
            <a className="text-greenTaco underline" href={`tel:${phoneNumber}`}>
              {phoneNumber}
            </a>
          </p>
        </div>
        <div className="font-Helvetica md:text-[19px] font-bold	">
          <Button
            className="h-10 w-48"
            type="submit"
            style={{
              color: "white",
            }}
            onClick={handleEmailClick}
          >
            Email Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
