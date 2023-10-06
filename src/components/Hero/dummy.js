import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/css/styles.css";
import images from "../../assets/images/imagesGallery";

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  //   const breakpoints = {
  //     320: {
  //       slidesPerView: 1,
  //     },
  //     480: {
  //       slidesPerView: 2,
  //     },
  //     768: {
  //       slidesPerView: 3,
  //     },
  //     1024: {
  //       slidesPerView: 4,
  //     },
  //   };

  useEffect(() => {
    let timeout;
    if (selectedImageIndex !== null) {
      // Set a timeout to reset the selectedImageIndex after 2 seconds
      timeout = setTimeout(() => {
        setSelectedImageIndex(null);
      }, 2000);
    }

    // Clear the timeout if the component unmounts or if selectedImageIndex changes
    return () => {
      clearTimeout(timeout);
    };
  }, [selectedImageIndex]);

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div id="gallery" className="gallery-container bg-greenTaco h-[800px]">
      {/* ... (same as before) ... */}

      {selectedImageIndex !== null && (
        <div className="modal">
          <div className="modal-content">
            <span className="closeBtn" onClick={closeModal}>
              &times;
            </span>
            <img
              className="modal-image"
              src={images[selectedImageIndex].url}
              alt={`image-${images[selectedImageIndex].id}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
