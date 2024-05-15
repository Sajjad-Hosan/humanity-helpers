import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const CardBox = ({ details, reqType }) => {
  const { _id, thumbnail, postTitle, category, dateline } = details;
  const {
    handleDeletePost,
    setUserVolunteerData,
    handleDeleteRequest,
    setUserRequestData,
  } = useAuth();
  const PostDelete = (id) => {
    handleDeletePost(id)
      .then(() => {
        toast.success("Deleted Successfully!");
        setUserVolunteerData((ex) => ex.filter((item) => item._id !== id));
      })
      .catch((e) => toast.error(e.message));
  };
  const handleRequestDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteRequest(id)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((e) => console.log(e));
        setUserRequestData((ex) => ex.filter((i) => i._id !== id));
      }
    });
  };
  return (
    <>
      <div className="card shadow-xl p-6">
        <div className="flex gap-4">
          <div className="w-40 h-36 rounded-xl overflow-hidden">
            <img
              src={thumbnail}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1 pt-3">
            <h1 className="text-xl">{postTitle}</h1>
            <p className="text-md">{category}</p>
            <p className="text-sm">{dateline}</p>
          </div>
        </div>
        <div className="flex justify-between items-center border-t-2 pt-4 mt-4">
          <div className="badge badge-info py-4 px-5">Status</div>
          <div className="flex gap-5">
            {reqType ? (
              <button
                onClick={() => handleRequestDelete(_id)}
                className="btn btn-error px-8"
              >
                Cancel
              </button>
            ) : (
              <>
                <button
                  onClick={() => PostDelete(_id)}
                  className="btn btn-error flex tooltip"
                  data-tip="Delete"
                >
                  <FaTrash />
                </button>
                <Link
                  to={`/volunteer_update_post/${_id}`}
                  className="btn btn-outline flex tooltip"
                  data-tip="Update"
                >
                  <FiEdit />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
CardBox.propTypes = {
  details: PropTypes.object,
};
export default CardBox;
