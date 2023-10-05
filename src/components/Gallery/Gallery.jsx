import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/css/styles.css";

import image01 from "../../assets/images/IMG_0025.jpg";
import image02 from "../../assets/images/IMG_0032.jpg";
import image03 from "../../assets/images/IMG_0043.jpg";
import image04 from "../../assets/images/IMG_0057.jpg";
import image05 from "../../assets/images/IMG_0059.jpg";
import image06 from "../../assets/images/IMG_0949.jpg";
import image07 from "../../assets/images/IMG_0987.jpg";
import image08 from "../../assets/images/IMG_0954.jpg";
import image09 from "../../assets/images/View_recent_photos_1 (2).jpeg";

const Gallery = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  };

  return (
    <div id="gallery" className="gallery-container bg-greenTaco h-[800px]">
      <div className="">
        <h1 className="text-[79px] font-Chango text-white text-center md:pt-[47px] my-12">
          Gallery
        </h1>
      </div>
      <div className="md:pt-[53px]">
        <Swiper
          breakpoints={breakpoints}
          centeredSlides={true}
          spaceBetween={0}
          grabCursor={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={image01} alt="image-01" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={image02} alt="image-02" />
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <img src={image03} alt="image-03" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={image04} alt="image-04" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={image05} alt="image-05" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={image06} alt="image-06" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={image07} alt="image-07" />
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <img src={image08} alt="image-08" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={image09} alt="image-09" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
