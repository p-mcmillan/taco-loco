import ImageLoader from "../ImageLoader/ImageLoder";
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
    <div className="max-h-screen bg-black flex flex-col items-center justify-center pt-[54px] md:pt-[81px] relativ">
      <Swiper
        className="h-full w-full bg-black"
        navigation={false}
        centeredSlides={true}
        modules={[Pagination]}
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
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ImageLoader
            className="h-screen w-screen object-cover bg-black"
            src={img01Hi}
            placeholderSrc={img01Lo}
            alt="Image 2"
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
      <h1 className="z-40 text-[40px] md:text-[48px] font-Chango text-white font-bold flex absolute bottom-[40px]">
        Mexican=Fun
      </h1>
    </div>
  );
};

export default Hero;
