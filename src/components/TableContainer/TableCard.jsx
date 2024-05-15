import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const TableCard = ({ details, req }) => {
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
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center">
        <th className="w-14 h-14">
          <img src={thumbnail} className="w-full h-full object-cover" alt="" />
        </th>
        <th
          scope="row"
          className=" py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {postTitle}
        </th>
        <td className=" py-4">{category}</td>
        <td className=" py-4">{dateline}</td>
        {req ? (
          <td className=" py-4">
            <button
              onClick={() => handleRequestDelete(_id)}
              className="btn btn-sm md:btn-md btn-error px-8"
            >
              Cancel
            </button>
          </td>
        ) : (
          <td className="py-4 flex gap-5">
            <button
              onClick={() => PostDelete(_id)}
              className="btn btn-sm md:btn-md btn-error flex tooltip"
              data-tip="Delete"
            >
              <FaTrash />
            </button>
            <Link
              to={`/volunteer_update_post/${_id}`}
              className="btn btn-sm md:btn-md btn-outline flex tooltip"
              data-tip="Update"
            >
              <FiEdit />
            </Link>
          </td>
        )}
      </tr>
    </>
  );
};
TableCard.propTypes = {
  details: PropTypes.object,
};
export default TableCard;
