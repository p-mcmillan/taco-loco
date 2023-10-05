import ImageLoader from "../ImageLoader/ImageLoder";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img01Lo from "../../assets/images/IMG_6187.png";
import img01Hi from "../../assets/images/IMG_6187@2x.png";
import img02Lo from "../../assets/images/IMG_6163.png";
import img02Hi from "../../assets/images/IMG_6163@2x.png";

// put images in a array and optomize
import { Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <div className="pt-[54px]">
      <Swiper
        className=""
        navigation={true}
        centeredSlides={true}
        modules={[Navigation, Pagination]}
        centeredSlidesBounds={true}
        pagination={true}
        autoplay={true}
        autoplayspeed={3000}
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
