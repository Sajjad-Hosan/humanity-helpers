import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth/useAuth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TableCard = ({ details }) => {
  const {_id, thumbnail, postTitle, category, dateline } = details;
  const { handleDeletePost, handleUpdatePost } = useAuth();
  const PostDelete = (id) => {
    handleDeletePost(id)
      .then(() => {
        toast.success("Deleted Successfully!");
      })
      .catch((e) => toast.error(e.message));
  };
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th className="w-10 h-10 rounded-md">
          <img src={thumbnail} className="w-full h-full object-cover" alt="" />
        </th>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {postTitle}
        </th>
        <td className="px-6 py-4">{category}</td>
        <td className="px-6 py-4">{dateline.slice(0, 10)}</td>
        <td className="py-4 flex gap-5">
          <button className="btn btn-error flex tooltip" data-tip="Delete">
            <FaTrash />
          </button>
          <Link
            to={`/volunteer_update_post/${_id}`}
            className="btn btn-outline flex tooltip"
            data-tip="Update"
          >
            <FiEdit />
          </Link>
        </td>
      </tr>
    </>
  );
};
TableCard.propTypes = {
  details: PropTypes.object,
};
export default TableCard;
