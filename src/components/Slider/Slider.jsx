import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
const Slider = () => {
  return (
    <>
      <img
        src="https://img.freepik.com/fotos-premium/grupo-voluntarios-recogiendo-basura_23-2147807239.jpg?w=740"
        alt=""
      />
        <div className="absolute bottom-2 md:left-14 bg-white p-5 w-[480px] md:w-[600px] md:h-[230px] rounded-2xl text-left">
      <Zoom>
          <h1 className="text-2xl">Lorem ipsum dolor sit amet</h1>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            harum optio, dicta voluptatem eveniet itaque excepturi qui dolorem
          </p>
          <Link className="btn px-10 mt-5 btn-neutral btn-outline">
            <TbListDetails/> Details
          </Link>
      </Zoom>
        </div>
    </>
  );
};

export default Slider;
