import "animate.css";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import bannerImage1 from "../../../assets/banner/doctor1.png";
import bannerImage2 from "../../../assets/banner/doctor2.png";

const Banner = () => {
  return (
    <div>
      <Swiper
        rewind={true}
        navigation={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper bg-[#dfe9ed]"
      >
        <SwiperSlide>
          <div className="flex items-center justify-between max-w-7xl mx-auto px-2">
            <div className="space-y-7">
              <p className="animate__animated animate__fadeInUp">
                Welcome To Poor Doct
              </p>
              <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold animate__animated animate__fadeInUp">
                Medical & <br /> Health Care <br /> Solutions.
              </h1>
              <p className="animate__animated animate__fadeInUp">
                We've 20 Years of experience in Medical Services
              </p>
              <button className="btn bg-[#e12454] text-white btn-secondary animate__animated animate__fadeInUp">
                Our Services
              </button>
            </div>
            <div>
              <img
                className="h-[350px] md:h-[500px] lg:h-[900px]"
                src={bannerImage1}
                alt="Doctor"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-between max-w-7xl mx-auto px-2">
            <div className="space-y-7">
              <p className="animate__animated animate__fadeInUp">
                Welcome To Poor Doct
              </p>
              <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold animate__animated animate__fadeInUp">
                Medical & <br /> Health Care <br /> Solutions.
              </h1>
              <p className="animate__animated animate__fadeInUp">
                We've 20 Years of experience in Medical Services
              </p>
              <button className="btn bg-[#e12454] text-white animate__animated animate__fadeInUp">
                Our Services
              </button>
            </div>
            <div>
              <img
                className="h-[350px] md:h-[500px] lg:h-[900px]"
                src={bannerImage2}
                alt="Doctor"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
