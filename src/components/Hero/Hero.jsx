import ImageLoader from "../ImageLoader/ImageLoder";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/element/css/autoplay";
import "../../styles/css/styles.css";

import { img01Lo, img01Hi, img02Lo, img02Hi } from "../../assets/index";

const Hero = () => {
  document.documentElement.style.setProperty("--swiper-theme-color", "white");

  return (
    <div className="min-h-screen  bg-black flex flex-col items-center justify-center pt-[54px] md:pt-[81px] relativ">
      <h1 className="z-50 text-[40px] md:text-[48px] font-Chango text-[#D6134B] font-bold flex absolute">
        Mexican=Fun
      </h1>
      <Swiper
        className="h-full w-full bg-black"
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
            className="h-screen w-screen object-cover bg-black"
            src={img02Hi}
            placeholderSrc={img02Lo}
            alt="Image 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ImageLoader
            className="h-screen w-screen object-cover bg-black"
            src={img01Hi}
            placeholderSrc={img01Lo}
            alt="Image 2"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
