import React from "react";
import { Link } from "react-router";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useDoctors from "../../../hooks/useDoctors";

const Doctors = () => {
  const [doctors] = useDoctors();

  return (
    <div className="max-w-7xl mx-auto px-2 mb-24">
      <SectionTitle
        heading={"Our Doctors"}
        subHeading={"A Professional & Care Provider"}
      />
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          rewind={true}
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {doctors.map((doctor) => (
            <SwiperSlide key={doctor._id}>
              <Link to={"/"}>
                {/* slider details */}
                <div className="relative mx-3">
                  <img
                    className="rounded-[6px]"
                    src={doctor.image}
                    alt={doctor.name}
                  />
                  <h2 className="absolute -bottom-5 -left-3 text-center py-5 px-4 rounded-full inline-block bg-[#04c065] hover:bg-[#e12454] text-white text-[14px] font-medium">
                    Explore <br /> More
                  </h2>
                </div>
                <h2 className="text-center text-2xl font-semibold mt-6 mb-2">
                  {doctor.name}
                </h2>
                <h3 className="text-center font-medium text-[#65768a]">
                  {doctor.designation}
                </h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Doctors;
