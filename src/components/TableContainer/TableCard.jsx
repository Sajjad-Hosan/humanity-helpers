import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth/useAuth";
import toast from "react-hot-toast";
const TableCard = () => {
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
        <th className="p-6 w-10 h-10 rounded-md bg-neutral font-medium text-gray-900 whitespace-nowrap dark:text-white">
          image
        </th>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Apple MacBook Pro 17"
        </th>
        <td className="px-6 py-4">Silver</td>
        <td className="px-6 py-4">Laptop</td>
        <td className="py-4 flex gap-5">
          <button className="btn btn-error flex tooltip" data-tip="Delete">
            <FaTrash />
          </button>
          <button className="btn btn-outline flex tooltip" data-tip="Update">
            <FiEdit />
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableCard;
