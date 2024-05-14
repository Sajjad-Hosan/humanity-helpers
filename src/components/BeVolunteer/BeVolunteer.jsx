import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaXmark } from "react-icons/fa6";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth/useAuth";
import useAxios from "../../hooks/useAxios";

const BeVolunteer = ({ data }) => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const [show, setShow] = useState(false);
  const [request, setRequest] = useState([]);
  useEffect(() => {
    const item = localStorage.getItem("req");
    setRequest(item);
  }, []);
  const {
    _id,
    thumbnail,
    category,
    dateline,
    description,
    location,
    organizerEmail,
    organizerName,
    postTitle,
    volunteerNeed,
  } = data;
  const handleSuggBox = (e) => {
    const suggCheck = e.target.checked;
    if (suggCheck) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const handleBeVolunteer = (e) => {
    e.preventDefault();
    const from = e.target;
    const suggestion = from.post_suggestion.value;
    const postDeatail = {
      postId: _id,
      thumbnail: thumbnail,
      postTitle: postTitle,
      category: category,
      dateline: dateline,
      location: location,
      description: description,
      suggestion: suggestion,
      volunteerNeed: parseInt(volunteerNeed),
      organizerEmail: organizerEmail,
      organizerName: organizerName,
    };

    // send data to new collection
    axiosSecure
      .post(`/volunteer_requested/${_id}`, postDeatail)
      .then((res) => {
        const mess = res.data.message;
        if (mess) {
          return toast.success("Data already exist!");
        }else{
          toast.success("Volunteer added successfully!");
          localStorage.setItem("req", request);
          setRequest([...request,_id])
        }
      })
      // .catch((e) => toast.error(e.message));
  };
  return (
    <>
      <dialog id="be_volunteer" className="modal">
        <div className="modal-box max-w-4xl min-h-screen py-2">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">Be a Volunteer</h3>
            <form method="dialog">
              <button className="btn btn-circle btn-ghost">
                <FaXmark />
              </button>
            </form>
          </div>
          <div>
            <form onSubmit={handleBeVolunteer} className="flex flex-col gap-3">
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
                    readOnly
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
                    readOnly
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
                    defaultValue={category}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write Post Category"
                    required
                    readOnly
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Location
                  </label>
                  <input
                    type="text"
                    name="post_title"
                    defaultValue={location}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write post title"
                    required
                    readOnly
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Post Dedline
                  </label>
                  <input
                    type="text"
                    name="post_dedline"
                    defaultValue={dateline}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    readOnly
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    No. of Volunteer Need
                  </label>
                  <input
                    type="text"
                    name="volunteer_need"
                    defaultValue={volunteerNeed}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    readOnly
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
                name="post_decription"
                rows="4"
                defaultValue={description}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
                readOnly
              ></textarea>
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-5">
                  <input
                    onChange={handleSuggBox}
                    type="checkbox"
                    name="sugg_check"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  />
                  Post Suggestion
                </div>
                <textarea
                  name="post_suggestion"
                  rows="4"
                  className={`${
                    show ? "flex" : "hidden"
                  } p-3 mt-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="Suggestion"
                ></textarea>
              </div>
              <input
                type="submit"
                value={"Request"}
                className="btn btn-info w-full md:w-1/4 mt-5 mx-auto"
              />
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
BeVolunteer.propTypes = {
  data: PropTypes.object,
};
export default BeVolunteer;
