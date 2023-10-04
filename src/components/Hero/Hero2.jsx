import heroImgLo from "../../assets/images/IMG_6147.png";
import heroImgHi from "../../assets/images/IMG_6147@2x.png";
import ImageLoader from "../ImageLoader/ImageLoder";

const Hero2 = () => {
  return (
    <div>
      <div
        className=" h-[414px] w-[318px] md:w-[467px] md:h-[765px]"
        style={{ backgroundImage: `url(${heroImgLo})` }}
      ></div>
    </div>
  );
};

export default Hero2;
