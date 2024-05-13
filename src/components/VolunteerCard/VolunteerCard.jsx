import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

const VolunteerCard = () => {
  return (
    <div>
      <div className="bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 p-5">
        <img
          className="rounded-xl"
          src="https://img.freepik.com/fotos-premium/grupo-voluntarios-recogiendo-basura_23-2147807239.jpg?w=740"
          alt=""
        />
        <div className="pt-3 mt-6 text-right">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 capitalize">
            children health care
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 capitalize"></p>
          <Link to='/volunteer_details_page' className="btn btn-neutral px-8 mt-5">
            <TbListDetails /> Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
