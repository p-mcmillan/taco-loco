import ImageLoader from "../ImageLoader/ImageLoder";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/element/css/autoplay";

import { img01Lo, img01Hi, img02Lo, img02Hi } from "../../assets/index";
//fix background of image i made it black for now
const Hero = () => {
  return (
    <div className="pt-[54px] md:pt-[81px] bg-black">
      <Swiper
        className="bg-black"
        navigation={true}
        centeredSlides={true}
        modules={[Navigation, Pagination]}
        centeredSlidesBounds={true}
        pagination={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <ImageLoader
            className="bg-black"
            src={img02Hi}
            placeholderSrc={img02Lo}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ImageLoader src={img01Hi} placeholderSrc={img01Lo} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
