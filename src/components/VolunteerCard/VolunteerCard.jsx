import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const VolunteerCard = ({ post }) => {
  const {thumbnail,shortDescription,postTitle,category,dateline,} = post;
  return (
    <div>

      <div className="bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 p-5 h-[640px]">
       <div className="w-full h-[240px]">
       <img
          className="rounded-xl w-full h-full object-cover"
          src={thumbnail}
          alt=""
        />
       </div>
        <div className="pt-3 mt-6 text-left">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {postTitle}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 capitalize">
            {shortDescription}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 capitalize"></p>
          <Link
            to="/volunteer_details_page"
            className="btn btn-neutral px-8 mt-5"
          >
            <TbListDetails /> Details
          </Link>
        </div>
        <div className="border-t mt-5 py-3 px-2  flex justify-between items-center">
          <span className="font-bold">Dateline : {dateline}</span>
          <span className="font-semibold">Category: {category}</span>
        </div>
      </div>
    </div>
  );
};
VolunteerCard.propTypes = {
  post: PropTypes.object,
};
export default VolunteerCard;
