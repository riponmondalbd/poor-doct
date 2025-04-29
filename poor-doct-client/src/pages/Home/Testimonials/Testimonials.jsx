import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Testimonials = () => {
  const axiosPublic = useAxiosPublic();
  const { data: testimonials = [] } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const res = await axiosPublic.get("/testimonials");
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div className="max-w-7xl mx-auto mb-24">
      <SectionTitle
        heading={"Testimonials"}
        subHeading={"Get Every Single Updates From Here"}
      />
      <div>
        <Swiper
          rewind={true}
          mousewheel={true}
          keyboard={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, Keyboard]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <div className="card">
                <figure className="px-10 pt-10">
                  <img
                    className="w-[200px] rounded-full mx-auto"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <p className="lg:w-2/3">{testimonial.testimonial}</p>
                  <BiSolidQuoteAltLeft className="text-5xl text-[#04c065]" />
                  <h2 className="card-title">{testimonial.name}</h2>
                  <p>{testimonial.designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
