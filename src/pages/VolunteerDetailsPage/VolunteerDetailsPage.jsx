import { IoPersonAddOutline } from "react-icons/io5";
import BeVolunteer from "../../components/BeVolunteer/BeVolunteer";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { Bounce } from "react-awesome-reveal";
const VolunteerDetailsPage = () => {
  const { req, user } = useAuth();
  const loaderData = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    thumbnail,
    category,
    dateline,
    description,
    location,
    postTitle,
    volunteerNeed,
  } = loaderData;
  return (
    <>
      <Helmet>
        <title>Humanity || Volunteer Details Page</title>
      </Helmet>
      <BeVolunteer data={loaderData} />
      <div className="px-5 md:px-10 mt-10 relative mb-56 md:mb-8">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-ghost mb-10 px-8"
        >
          <FaArrowLeft /> Back
        </button>
          <Bounce>
        <div className="card overflow-hidden bg-neutral h-[400px] md:h-[550px]">
          <img src={thumbnail} alt="" className="w-full h-full object-cover" />
        </div>
          </Bounce>
        <div className="card p-8 bg-base-100 md:shadow-lg md:w-[1000px] md:h-[380px] absolute md:bottom-[8rem] md:left-20">
          <div className="flex justify-between">
            <h1 className="text-lg md:text-3xl mb-4">Post Details</h1>
            <div className="flex gap-5">
              <div className="badge badge-info px-5 py-4 font-semibold capitalize">
                {category}
              </div>
              <div className="badge badge-neutral px-5 py-4 capitalize flex items-center gap-2">
                Volunteer Need :{" "}
                <span className="font-bold"> {volunteerNeed}</span>
              </div>
            </div>
          </div>
          <h1 className="text-lg md:text-4xl">{postTitle}</h1>
          <p className="text-md mt-2">
            <span className="font-bold">location:</span> {location}
          </p>
          <p className="text-md my-2">{description}</p>
          <p className="text-md my-2 badge badge-info px-4 py-4 font-semibold">
            Dateline- {dateline}
          </p>
          <div className="flex items-center mt-8 gap-10">
            {req ? (
              <Bounce>

              <button className="btn btn-neutral text-info px-10 w-1/4">
                Requested
              </button>
              </Bounce>
            ) : (
              <Bounce>

              <button
                onClick={() =>
                  document.getElementById("be_volunteer").showModal()
                }
                className="btn btn-neutral text-info px-10 md:w-1/4"
                >
                <IoPersonAddOutline /> Be a Volunteer
              </button>
                </Bounce>
            )}
            {user?.email === "s4jj4dh034n@gmail.com" ? (
              <Bounce>

              <Link
                className="btn btn-outline px-8"
                to={`/update_volunteer_need/${_id}`}
                >
                Update Page
              </Link>
                </Bounce>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="h-[300px]"></div>
      </div>
    </>
  );
};

export default VolunteerDetailsPage;
