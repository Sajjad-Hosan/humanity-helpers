import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import ReactDatePicker from "react-datepicker";
import { Helmet } from "react-helmet-async";

const VolunteerUpdate = () => {
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
  const axiosSecure = useAxios();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date(dateline));
  const { user } = useAuth();
  const handleUserData = (e) => {
    e.preventDefault();
    const from = e.target;
    const thumbnail = from.thumbnail.value;
    const postTitle = from.post_title.value;
    const category = from.post_category.value;
    const location = from.post_location.value;
    const dateline = startDate.toLocaleDateString();
    const volunteerNeed = from.volunteer_need.value;
    const description = from.post_description.value;
    const orgaName = from.organizer_name.value;
    const orgaEmail = from.organizer_email.value;
    const postDetails = {
      thumbnail: thumbnail,
      postTitle: postTitle,
      category: category,
      location: location,
      dateline: dateline,
      volunteerNeed: parseInt(volunteerNeed),
      description: description,
      organizerName: orgaName,
      organizerEmail: orgaEmail,
    };
    //
    axiosSecure
      .patch(`/user_volunteer_post/${_id}`, postDetails)
      .then(() => {
        toast.success("Data has been Updated!");
        from.reset();
        navigate(-1);
      })
      .catch((e) => toast.error(e.message));
  };
  return (
    <div className="flex flex-col gap-4 px-10 mt-5">
      <Helmet>
        <title>Humanity || Volunteer Update Page</title>
      </Helmet>
      <div className="flex mb-5">
        <h1 className="text-4xl">Update Post</h1>
      </div>
      <div className="">
        <form onSubmit={handleUserData} className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Post Thumbnail
              </label>
              <input
                type="text"
                name="thumbnail"
                defaultValue={thumbnail}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Thumbnail Url"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Post Title
              </label>
              <input
                type="text"
                name="post_title"
                defaultValue={postTitle}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write Post Title"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Post Category
              </label>
              <input
                type="text"
                defaultValue={category}
                name="post_category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write Post Category"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Location
              </label>
              <input
                type="text"
                name="post_location"
                defaultValue={location}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write post title"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Post Dedline
              </label>
              <ReactDatePicker
                dateFormat="yyyy/MM/dd"
                className="input input-bordered w-full"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                No. of Volunteer Need
              </label>
              <input
                type="text"
                name="volunteer_need"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                defaultValue={volunteerNeed}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Organizer Name
              </label>
              <input
                type="text"
                name="organizer_name"
                defaultValue={user?.displayName}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                readOnly
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Organizer Email
              </label>
              <input
                type="email"
                name="organizer_email"
                defaultValue={user?.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                readOnly
              />
            </div>
          </div>

          <label className="block text-sm font-medium text-gray-900 dark:text-white">
            Post Description
          </label>
          <textarea
            name="post_description"
            rows="4"
            defaultValue={description}
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
          <input
            type="submit"
            value={"Update Post"}
            className="btn btn-info w-full md:w-1/4 mt-5 mb-10 mx-auto"
          />
        </form>
      </div>
    </div>
  );
};

export default VolunteerUpdate;
