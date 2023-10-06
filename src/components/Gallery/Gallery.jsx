import PropTypes from "prop-types";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/css/styles.css";
import images from "../../assets/images/imagesGallery";
import PopUp from "../PopUp/PopUp";

const Gallery = ({ setOpenPopup }) => {
  const HandleRemovePopUp = () => setOpenPopup(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpenPopup(true);
  };

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
          navigation={true}
          className="mySwiper z-0"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <img
                className="object-cover"
                onClick={() => handleImageClick(image)}
                src={image.url}
                alt={`image-${image.id}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {selectedImage && (
        <PopUp
          openPopUp={true}
          closePopUp={() => setSelectedImage(null)}
          image={selectedImage}
        />
      )}
    </div>
  );
};
Gallery.propTypes = {
  setOpenPopup: PropTypes.func.isRequired,
};

export default Gallery;
