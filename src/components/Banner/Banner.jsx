import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../../styles.css";

import { Autoplay, Mousewheel } from "swiper/modules";
import Slider from "../Slider/Slider";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="max-w-5xl h-[500px] mt-10 mx-auto overflow-hidden px-2 md:px-0">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        mousewheel={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Mousewheel]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};
export default Banner;
