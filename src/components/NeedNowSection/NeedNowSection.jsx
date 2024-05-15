import { Link } from "react-router-dom";
import VolunteerCard from "../VolunteerCard/VolunteerCard";
import PropTypes from "prop-types";
import { Bounce } from "react-awesome-reveal";

const NeedNowSection = ({ loaderDatas }) => {
  const volunteerPosts = loaderDatas.slice(0, 6);
  return (
    <div className="flex flex-col gap-4 mt-28 text-center pb-4">
      <h1 className="text-4xl mb-10">Volunteer Need Now</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 mb-3">
        <Bounce>
        {volunteerPosts.map((post) => (
          <VolunteerCard key={post._id} post={post} />
        ))}
        </Bounce>
      </div>
      <Bounce>
      <Link
        to="/need_volunteer_page"
        className="btn btn-neutral px-10 w-1/2 mx-auto"
        >
        See All
      </Link>
        </Bounce>
    </div>
  );
};
NeedNowSection.propTypes = {
  loaderDatas: PropTypes.array,
};
export default NeedNowSection;
