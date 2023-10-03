import heroImgLo from "../../assets/images/IMG_6147.png";
import heroImgHi from "../../assets/images/IMG_6147@2x.png";
import ImageLoader from "../ImageLoader/ImageLoder";

const Hero2 = () => {
  return (
    <div className="mt-6 md:mt-0 mx-9 md:mx-0 h-[414px] w-[318px] md:w-[467px] md:h-[765px]">
      <ImageLoader
        className="mt-6 md:mt-0 mx-9 md:mx-0 h-[414px] w-[318px] md:w-[467px] md:h-[765px]"
        src={heroImgHi}
        placeholderSrc={heroImgLo}
      />
    </div>
  );
};

export default Hero2;
