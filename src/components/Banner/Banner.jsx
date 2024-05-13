import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../../styles.css";

import { Autoplay, Mousewheel } from "swiper/modules";
import Slider from "../Slider/Slider";

const Banner = ({ loaderDatas }) => {
  const [sliders, setSliders] = useState(loaderDatas.slice(0, 6));
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="max-w-5xl md:max-w-6xl h-[500px] mt-10 mx-auto overflow-hidden px-2 md:px-0">
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
        {sliders.map((slide) => (
          <SwiperSlide key={slide._id}>
            <Slider slider={slide} />
          </SwiperSlide>
        ))}

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
Banner.propTypes = {
  loaderDatas: PropTypes.array,
};
export default Banner;
