import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useDoctors from "../../../hooks/useDoctors";
import DoctorSectionDetails from "../../Shared/DoctorSectionDetails/DoctorSectionDetails";

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
              {/* slider details */}
              <DoctorSectionDetails
                id={doctor._id}
                image={doctor.image}
                name={doctor.name}
                designation={doctor.designation}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Doctors;
