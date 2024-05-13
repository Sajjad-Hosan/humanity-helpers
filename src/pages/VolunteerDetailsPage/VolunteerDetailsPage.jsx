import { IoPersonAddOutline } from "react-icons/io5";
import BeVolunteer from "../../components/BeVolunteer/BeVolunteer";
const VolunteerDetailsPage = () => {
  const data = [
    {
      Thumbnail: "thumbnail_url_20",
      Post_Title: "Mental Health Support Volunteers",
      Short_Description:
        "Provide support and compassion to those struggling with mental illness.",
      Description:
        "Provide support and compassion to those struggling with mental illness in our community. Volunteers will offer peer support, facilitate support groups, and provide resources. Make a difference by offering understanding and encouragement to those facing mental health challenges.",
      Category: "healthcare",
      Location: "Phoenix, AZ",
      volunteers_needed: 8,
    },
  ];
  return (
    <>
      <BeVolunteer />
      <div className="px-5 md:px-10 mt-10 relative">
        <div className="card p-5 bg-neutral h-[400px] md:h-[550px]"></div>
        <div className="card p-8 bg-base-100 md:shadow-lg md:w-[1000px] md:h-[350px] absolute md:bottom-[8rem] md:left-20">
          <div className="flex justify-between">
            <h1 className="text-3xl mb-4">Post Details</h1>
            <div className="flex gap-5">
              <div className="badge badge-info px-5 py-4 font-semibold capitalize">
                {data[0].Category}
              </div>
              <div className="badge badge-neutral px-5 py-4 capitalize flex items-center gap-2">
                Volunteer Need :{" "}
                <span className="font-bold"> {data[0].volunteers_needed}</span>
              </div>
            </div>
          </div>
          <h1 className="text-4xl">{data[0].Post_Title}</h1>
          <p className="text-md mt-2">
            <span className="font-bold">location:</span> {data[0].Location}
          </p>
          <p className="text-md my-2">{data[0].Description}</p>
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
