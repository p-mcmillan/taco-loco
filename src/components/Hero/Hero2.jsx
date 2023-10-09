import { heroImgLo } from "../../assets/index";

const Hero2 = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div
        className=" h-[414px] w-[318px] md:w-[467px] md:h-[765px]"
        style={{
          backgroundImage: `url(${heroImgLo})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default Hero2;
