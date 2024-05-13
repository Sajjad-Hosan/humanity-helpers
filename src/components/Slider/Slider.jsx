import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import PropTypes from "prop-types";

const Slider = ({ slider }) => {
  const { _id, thumbnail, postTitle, description } = slider;
  return (
    <>
      <img src={thumbnail} className="w-full h-full object-cover" alt="" />
      <div className="absolute bottom-2 md:left-14 bg-white p-5 w-[480px] md:w-[600px] md:h-[230px] rounded-2xl text-left">
        <Zoom>
          <h1 className="text-2xl">{postTitle}</h1>
          <p className="text-sm mt-2">{description}</p>
          <Link
            to={`/volunteer_details_page/${_id}`}
            className="btn px-10 mt-5 btn-neutral btn-outline"
          >
            <TbListDetails /> Details
          </Link>
        </Zoom>
      </div>
    </>
  );
};
Slider.propTypes = {
  slider: PropTypes.object,
};
export default Slider;
