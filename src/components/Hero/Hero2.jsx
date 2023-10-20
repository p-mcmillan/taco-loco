import { heroImgLo } from "../../assets/index";

const Hero2 = () => {
  return (
    <div className=" flex flex-col items-center justify-center z-30">
      <div
        className=" h-[414px] xl:h-[486px] md:h-[486px] lg:h-[486px] w-[318px] 2xl:w-[467px] 2xl:h-[765px]"
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
