import { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/css/styles.css";

import images from "../../assets/images/images";

const Gallery = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

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
        <h1 className="md:text-[79px] text-[40px] font-Chango text-white text-center md:pt-[47px] my-12 pt-[16px]">
          Gallery
        </h1>
      </div>
      <div className="">
        <Swiper
          breakpoints={breakpoints}
          centeredSlides={true}
          spaceBetween={0}
          grabCursor={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper z-0"
        >
          {images.map((image, index) => (
            <SwiperSlide key={image.id}>
              <img
                className={clickedIndex === index ? "clicked-image z-50" : ""}
                src={image.url}
                alt={`image-${image.id}`}
                onClick={() => setClickedIndex(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
