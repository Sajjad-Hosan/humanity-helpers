import { IoPersonAddOutline } from "react-icons/io5";
import BeVolunteer from "../../components/BeVolunteer/BeVolunteer";
import { useLoaderData } from "react-router-dom";
const VolunteerDetailsPage = () => {
  const loaderData = useLoaderData();
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
      <BeVolunteer data={loaderData}  />
      <div className="px-5 md:px-10 mt-10 relative">
        <div className="card overflow-hidden bg-neutral h-[400px] md:h-[550px]">
          <img src={thumbnail} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="card p-8 bg-base-100 md:shadow-lg md:w-[1000px] md:h-[360px] absolute md:bottom-[8rem] md:left-20">
          <div className="flex justify-between">
            <h1 className="text-3xl mb-4">Post Details</h1>
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
          <h1 className="text-4xl">{postTitle}</h1>
          <p className="text-md mt-2">
            <span className="font-bold">location:</span> {location}
          </p>
          <p className="text-md my-2">{description}</p>
          <p className="text-md my-2 badge badge-info px-4 py-4 font-semibold">Dateline- {dateline}</p>
          <button
            onClick={() => document.getElementById("be_volunteer").showModal()}
            className="btn btn-neutral text-info px-10 w-1/4 mt-5"
          >
            <IoPersonAddOutline /> Be a Volunteer
          </button>
        </div>
        <div className="h-[300px]"></div>
      </div>
    </>
  );
};

export default VolunteerDetailsPage;
