import { FaXmark } from "react-icons/fa6";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth/useAuth";
import ReactDatePicker from "react-datepicker";

const AddVolunteer = () => {
  const axiosSecure = useAxios();
  const [startDate, setStartDate] = useState(new Date());
  const { user, userVolunteerData, setUserVolunteerData } = useAuth();
  const handleUserData = (e) => {
    e.preventDefault();
    const from = e.target;
    const thumbnail = from.thumbnail.value;
    const postTitle = from.post_title.value;

    const category = from.post_category.value;
    const location = from.post_location.value;
    const dateline = startDate;
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
      volunteerNeed: volunteerNeed,
      description: description,
      organizerName: orgaName,
      organizerEmail: orgaEmail,
    };
    setUserVolunteerData([postDetails, ...userVolunteerData]);
    //
    axiosSecure
      .post("/user_volunteer_post", postDetails)
      .then(() => {
        toast.success("Data has been added!");
        from.reset();
      })
      .catch((e) => toast.error(e.message));
  };
  return (
    <>
      <dialog id="add_box" className="modal">
        <div className="modal-box max-w-5xl max-h-screen overflow-hidden">
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-bold text-xl">Add Volunteer</h3>
            <form method="dialog">
              <button className="btn btn-ghost btn-circle text-lg">
                <FaXmark />
              </button>
            </form>
          </div>
          <div className="flex flex-col">
            <form
              onSubmit={handleUserData}
              className="flex flex-col gap-3"
            >
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Post Thumbnail
                  </label>
                  <input
                    type="text"
                    name="thumbnail"
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
                    defaultValue={0}
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
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
              <input
                className="btn btn-info w-1/4 mx-auto mt-5"
                type="submit"
                value="+ Add Post"
              />
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AddVolunteer;
