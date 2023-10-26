import Button from "../Button/Button";

const About = () => {
  const emailAddress = "sanjay@tacolocokits.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const phoneNumber = "   604-733-3323";
  const tel = "+1-604-773-3323";

  return (
    <div className="bg-white h-auto w-[318px] 2xl:w-[468px] 2xl:h-[765px] mx-[36px] xl:mx-0 lg:mx-0 md:mx-0 2xl:mx-0 z-30">
      <div className="2xl:ml-[22px] 2xl:mt-[122px] ">
        <p className="text-[35px] 2xl:text-[48px] font-Chango font-bold text-[#D6134B] uppercase 2xl:mb-[33px] mt-[25px] 2xl:mt text-center 2xl:text-left">
          tacoloco:
          <br />
          <span className="2xl:text-[35px] text-[24px]">“mexican = fun”</span>
        </p>
      </div>
      <div className="2xl:ml-[71px] 2xl:mb-[181px] 2xl:mr-[21px] ml-[26px] mr-[24px]">
        <div className="2xl:w-[356px] 2xl:h-[265px] mt-4 2xl:mt-0 ">
          <p className="text-[16px] 2xl:text-[19px] text-left font-Roboto leading-[32px] ">
            Welcome to Taco Loco, where our passion for fresh ingredients and
            bold flavors comes together to redefine the taco experience in the
            vibrant heart of Kitsilano. If you are looking for reservations or
            have general inquiries, please call
            <span className="2xl:hidden">
              <br />
            </span>
            <a className="text-greenTaco underline" href={`tel:${tel}`}>
              {phoneNumber}
            </a>
          </p>
        </div>
        <div className="font-Helvetica 2xl:text-[19px] font-bold	mb-[25px] mt-2">
          <div className="2xl:text-left text-center">
            <Button
              className="h-10 w-48 font-Helvetica font-medium"
              type="submit"
              style={{
                color: "white",
                fontFamily: "Helvetica",
              }}
              onClick={handleEmailClick}
            >
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
