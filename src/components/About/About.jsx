import Button from "../Button/Button";

const About = () => {
  const emailAddress = "sanjay@tacolocokits.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const phoneNumber = "   604-733-3323";
  const tel = "+1-604-773-3323";

  return (
    <div className="bg-white h-auto w-[318px] md:w-[468px] md:h-[765px] mx-[36px] 2xl:mx-0">
      <div className="md:ml-[22px] md:mt-[122px] ">
        <h1 className="text-[40px] md:text-[48px] font-Chango text-[#D6134B] uppercase md:mb-[33px]  mt-[25px] md:mt">
          tacoloco:
          <br />
          “fun latin”
        </h1>
      </div>
      <div className="md:ml-[71px] md:mb-[181px] md:mr-[21px] ml-[26px] mr-[24px]">
        <div className="md:w-[356px] md:h-[265px] mt-4 md:mt-0 ">
          <p className="text-[16px] md:text-[19px] text-left font-Roboto leading-[32px] ">
            Welcome to Taco Loco, where our passion for fresh ingredients and
            bold flavors comes together to redefine the taco experience in the
            vibrant heart of Kitsilano. If you are looking for reservations or
            have general inquiries, please call
            <span className="md:hidden">
              <br />
            </span>
            <a className="text-greenTaco underline" href={`tel:${tel}`}>
              {phoneNumber}
            </a>
          </p>
        </div>
        <div className="font-Helvetica md:text-[19px] font-bold	mb-[25px] mt-2">
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
