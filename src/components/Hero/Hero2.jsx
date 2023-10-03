import heroImgLo from "../../assets/images/IMG_6147.png";
import heroImgHi from "../../assets/images/IMG_6147@2x.png";
import ImageLoader from "../ImageLoader/ImageLoder";

const Hero2 = () => {
  return (
    <div
      className="mt-6 md:mt-0 mx-9 md:mx-0 h-[414px] w-[318px] md:w-[467px] md:h-[765px] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${heroImgHi})` }}
    >
      {/* You can place other content inside this div if needed */}
    </div>
  );
};

export default Hero2;
