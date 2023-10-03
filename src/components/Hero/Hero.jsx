import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ImageLoader from "../ImageLoader/ImageLoder";

import img01Lo from "../../assets/images/IMG_6187.png";
import img01Hi from "../../assets/images/IMG_6187@2x.png";
import img02Lo from "../../assets/images/IMG_6163.png";
import img02Hi from "../../assets/images/IMG_6163@2x.png";

const Hero = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
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
