import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ImageLoader from "../ImageLoader/ImageLoder";

import img01Lo from "../../assets/images/IMG_6187.png";
import img01Hi from "../../assets/images/IMG_6187@2x.png";
import img02Lo from "../../assets/images/IMG_6163.png";
import img02Hi from "../../assets/images/IMG_6163@2x.png";

// put images in a array and optomize

const Hero = () => {
  return (
    <div className="">
      <Swiper
        className="pt-[54px]"
        navigation={true}
        centeredSlides={true}
        modules={[Navigation]}
        centeredSlidesBounds={true}
      >
        <SwiperSlide>
          <ImageLoader src={img01Hi} placeholderSrc={img01Lo} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageLoader src={img02Hi} placeholderSrc={img02Lo} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
