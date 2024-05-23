import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="py-10 text-blue-800 dark:text-blue-400 bg-zinc-100 dark:bg-zinc-950">
      <h2 className="font-bold font-serif text-4xl text-center mb-10 p-2 md:p-0">
        What People Say
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mx-auto w-full h-full"
      >
        <SwiperSlide className="text-center flex flex-col items-center justify-center">
          <img
            src="./client-01.png"
            className="object-cover w-[128px] block mx-auto rounded-full mb-8"
            alt="Profile Image"
          />
          <h3 className="uppercase text-2xl font-bold font-serif">
            Kevin Powell
          </h3>
          <img
            src="./quote.png"
            className="my-3 mx-auto w-8"
            alt="Quote Symbol"
          />
          <p className="italic max-w-xl mx-auto px-3 mb-12 text-gray-500 dark:text-gray-300">
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
          </p>
        </SwiperSlide>
        <SwiperSlide className="text-center flex flex-col items-center justify-center">
          <img
            src="./client-02.png"
            className="object-cover w-[128px] block mx-auto rounded-full mb-8"
            alt="Profile Image"
          />
          <h3 className="uppercase text-2xl font-bold font-serif">
            Anisul Islam
          </h3>
          <img
            src="./quote.png"
            className="my-3 mx-auto w-8"
            alt="Quote Symbol"
          />
          <p className="italic max-w-xl mx-auto px-3 mb-12 text-gray-500 dark:text-gray-300">
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
          </p>
        </SwiperSlide>
        <SwiperSlide className="text-center flex flex-col items-center justify-center">
          <img
            src="./client-03.jpg"
            className="object-cover w-[128px] block mx-auto rounded-full mb-8"
            alt="Profile Image"
          />
          <h3 className="uppercase text-2xl font-bold font-serif">
            Rabbil Hasan
          </h3>
          <img
            src="./quote.png"
            className="my-3 mx-auto w-8"
            alt="Quote Symbol"
          />
          <p className="italic max-w-xl mx-auto px-3 mb-12 text-gray-500 dark:text-gray-300">
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
